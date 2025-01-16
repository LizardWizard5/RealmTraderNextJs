import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getUser } from "@/app/lib/databaseCalls";

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: "identify email connections guilds" } },
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
          username: profile.username,
          discordId: profile.id,
          globalName: profile.global_name,
          bannerColor: profile.banner_color,
          isVerified: profile.verified,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if user exists in the database
        const existingUser = await getUser(user.discordId);

        if (!existingUser) {
          // If the user doesn't exist, insert into the database
          await createUser({
            discordId: user.discordId,
            username: user.displayName,
            email: user.email,
            avatar: user.image,
            globalName: user.globalName,
            bannerColor: user.bannerColor,
            isVerified: user.isVerified,
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
