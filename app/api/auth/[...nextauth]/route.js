import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getUser, createUser } from "@/app/lib/databaseCalls";

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: "identify email connections guilds" } },
      profile(profile) {
        console.log("In profile");
        return {
          discordId: profile.id, // Maps to the 'discordId' field in UserSchema
          email: profile.email, // Maps to the 'email' field in UserSchema
          username: profile.username, // Maps to the 'username' field in UserSchema
          ProfilePicture: `${profile.avatar}.png`, // Maps to 'ProfilePicture'
          DisplayName: profile.global_name || profile.username, // Maps to 'Dis playName' (fallback to username if global_name is null)
          BannerColor: profile.banner_color || null, // Maps to 'BannerColor' (null if not provided)
          IsVerified: profile.verified, // Maps to 'IsVerified'
          status: "user", // Default status is 'user' (set explicitly)
          bannedUntil: null, // Default to null (no ban applied)
          bannedReason: null, // Default to null (no ban applied)
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
        const existingUser = await getUser(user.discordId);

        if (!existingUser) {
          console.log("User does not exist in the database. Creating user...");
          // If the user doesn't exist, insert into the database
          await createUser({
            email: user.email, // Maps to email
            username: user.username, // Maps to username
            discordId: user.discordId, // Maps to discordId
            ProfilePicture: user.ProfilePicture || null, // Maps to ProfilePicture
            DisplayName: user.DisplayName, // Maps to DisplayName
            BannerColor: user.BannerColor || null, // Maps to BannerColor
            IsVerified: user.IsVerified, // Maps to IsVerified
            status: "user", // Default to "user" (required by schema)
            bannedUntil: null, // Default to null (no ban applied)
            bannedReason: null, // Default to null (no ban applied)
          });
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
        token.discordId = user.discordId;
        token.globalName = user.globalName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.discordId = token.discordId;
      session.user.globalName = token.globalName;
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
