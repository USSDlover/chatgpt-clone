import NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google';

export const nextAuthOption = {
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_OAUTH2_ID!,
            clientSecret: process.env.GOOGLE_OAUTH2_SECRET!,
        }),
    ],
}

const handler = NextAuth(nextAuthOption)

export { handler as GET, handler as POST }
