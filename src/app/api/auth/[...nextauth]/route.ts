// app/api/auth/[...nextauth]/route.ts (atau sesuai path kamu)

import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubProfile = profile as { login?: string }
        token.username = githubProfile.login
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.username) {
        session.user.username = token.username as string
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
