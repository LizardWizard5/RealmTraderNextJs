import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getUser, createUser, getUserById, getUserByDiscordId } from "@/app/lib/databaseCalls";

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: "identify email" } },
      profile(profile) {
        console.log("In profile");
        console.log(profile);
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
        console.log("Attempting Sign In...");
        console.log("User:", user);
        // Check if user exists in the database
        const User = await getUserByDiscordId(user.id);
        console.log("Existing User:", User);

        if (!User) {
          console.log("User does not exist in the database. Creating user...");
          // If the user doesn't exist, insert into the database
          const User = await createUser({
            email: user.email, // Maps to email
            username: user.username, // Maps to username
            discordId: user.id, // Maps to discordId
            ProfilePicture: user.ProfilePicture || null, // Maps to ProfilePicture
            DisplayName: user.DisplayName, // Maps to DisplayName
            BannerColor: user.BannerColor || null, // Maps to BannerColor
            IsVerified: user.IsVerified, // Maps to IsVerified
            status: "user", // Default to "user" (required by schema)
            bannedUntil: null, // Default to null (no ban applied)
            bannedReason: null, // Default to null (no ban applied)
          });
          
        }
        user.mongoId = User._id;

        // Return true to proceed with the authentication
        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false; // Reject the sign-in
      }
    },
    async jwt({ token, user }) {
      if (user) {
        console.log("In jwt callback");
        token.id = user.mongoId;
        token.discordId = user.id;
        token.username = user.username;
        token.ProfilePicture = user.ProfilePicture;
        token.DisplayName = user.DisplayName;
        token.BannerColor = user.BannerColor;
        token.IsVerified = user.IsVerified;
        token.status = user.status;


        console.log(user);
      }
      return token;
    },
    async session({ session, token }) {
      console.log("In session callback");
      session.user.id = token.id;
      session.user.discordId = token.discordId;
      session.user.username = token.username;
      session.user.ProfilePicture = token.ProfilePicture;
      session.user.DisplayName = token.DisplayName;
      session.user.BannerColor = token.BannerColor;
      session.user.IsVerified = token.IsVerified;
      session.user.status = token.status;
      
      console.log(session);
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
