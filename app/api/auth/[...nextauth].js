import NextAuth from "next-auth"

import DiscordProvider from "next-auth/providers/discord";

const authOptions = NextAuth( {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session(session, token) {
      // Customize the session object here if needed
      session.user.id = token.sub;
      return session;
    },
  },

})

export {authOptions as GET, authOptions as POST}