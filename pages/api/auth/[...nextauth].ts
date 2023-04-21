import NextAuth from "next-auth"
import GoogleProviders from 'next-auth/providers/google';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_OAUTH2_ID!,
            clientSecret: process.env.GOOGLE_OAUTH2_SECRET!,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)
