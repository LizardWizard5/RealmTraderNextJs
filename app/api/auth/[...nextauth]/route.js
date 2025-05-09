import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getUser, createUser, getUserById, getUserByDiscordId } from "@/app/lib/databaseCalls";
import axios from "axios";
import fs from "fs";
const pfpDir = "public/account/pfp"; // Directory for profile pictures


async function downloadPfp (url, uid) {
  console.log("Downloading profile picture from URL:", url);
  console.log("Saving to UID:", uid);
  const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
  });

  const writer = fs.createWriteStream(pfpDir+`/${uid}.png`);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
  });
}



const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: "identify email" } },
      profile(profile) {
        return {
          id: profile.id , // Maps to the 'discordId' field in UserSchema
          email: profile.email, // Maps to the 'email' field in UserSchema
          username: profile.username, // Maps to the 'username' field in UserSchema
          ProfilePicture: `${profile.avatar}.png`, // Maps to 'ProfilePicture'
          DisplayName: profile.global_name || profile.username, // Maps to 'Dis playName' (fallback to username if global_name is null)
          BannerColor: profile.banner_color || null, // Maps to 'BannerColor' (null if not provided)
          IsVerified: profile.verified, // Maps to 'IsVerified'
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if user exists in the database
        let dbUser = await getUserByDiscordId(user.id);

        if (!dbUser) {
          console.log("User does not exist in the database. Creating user...");
          // If the user doesn't exist, insert into the database
            dbUser = await createUser({
            email: user.email, // Maps to email
            username: user.username, // Maps to username
            discordId: user.id, // Maps to discordId
            ProfilePicture:  user.ProfilePicture, // Maps to ProfilePicture
            DisplayName: user.DisplayName, // Maps to DisplayName
            BannerColor: user.BannerColor || null, // Maps to BannerColor
            IsVerified: user.IsVerified, // Maps to IsVerified
            status: "user", // Default to "user" (required by schema)
            bannedUntil: null, // Default to null (no ban applied)
            bannedReason: null, // Default to null (no ban applied) 
            
          }); 

      
          // Download the profile picture
          await downloadPfp(`https://cdn.discordapp.com/avatars/${dbUser.discordId}/${dbUser.ProfilePicture}`, dbUser._id);
          
        }

        // Return true to proceed with the authentication
        return true;  
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false; // Reject the sign-in
      }
    },
    async jwt({ token, user }) {
      if (user) {
        let dbUser = await getUserByDiscordId(user.id);
        
        token.id = dbUser._id; // Add user ID to the token
        token.discordId = user.id;
        token.username = user.username;
        token.ProfilePicture = user.ProfilePicture;
        token.DisplayName = user.DisplayName;
        token.BannerColor = user.BannerColor;
        token.IsVerified = user.IsVerified;
        token.status = user.status;
        token.bannedUntil = user.bannedUntil;
        token.bannedReason = user.bannedReason; // Add banned reason to the token


      }
      return token;
    },
    async session({ session, token }) {
      

      session.user.id = token.id;
      session.user.discordId = token.discordId;
      session.user.username = token.username;
      session.user.ProfilePicture = token.ProfilePicture;
      session.user.DisplayName = token.DisplayName;
      session.user.BannerColor = token.BannerColor;
      session.user.IsVerified = token.IsVerified;
      session.user.status = token.status;
      session.user.bannedUntil = token.bannedUntil;
      session.user.bannedReason = token.bannedReason;

      return session;
    },
  },
  debug: false,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
