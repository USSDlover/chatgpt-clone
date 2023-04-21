This is ChatGPT Cloned application

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Required Environment Variables

This app is using 3rd parties to do the Authentication and Database and also Open AI platform.
 Those tools require some variables which will injected into app using `.env` file or `.env.local` for local
 development

### Authentication

The app is using [Next Auth](https://next-auth.js.org/getting-started/example) solution as authentication provider.

- That requires some keys from Google firebase
`Console Firebase -> Authentication -> if not started yet click on Get Started -> select Google -> Enable it -> Click on Edit`
Under Web SDK Configuration copy the Client ID and Secret Key and go ahead and place them in `.env` file or add it to server environment variables

- Next Auth URL is address to API which is local host for NextJS

- Make sure to update redirects and white-list the localhost or the deployed domain address.
 Go to Google Cloud platform and the configurations should be available under `APIs & Services -> Credentials`
  - For redirect URL try to sign in on your app and open more detail on error and copy the redirect URL from error message in your app
    and paste it into Google Cloud

- Then you'll need to go to Google Cloud platform and retrieve the project ID and Secret which is available
under `APIs & Services / Credentials` and put the at .env for server variables

### Database

For database, we are using FireBase here, which can be replaced with any other database you like.

To use firebase you will need to import the firebase configuration into .env file or directly add it into `firebase.ts` file.

If you plan to use it as an environment variable, make sure to remove [line break remover](https://www.textfixer.com/tools/remove-line-breaks.php) first.

#### Admin Access

As we need to do some stuff at server side, we need Admin Access, for that we need `Firebase Service Account Key`
 which is available under `Firebase Console -> Head over to Project Settings -> Service Accounts`

When the key generated, download a file and copy the content into [line break remover](https://www.textfixer.com/tools/remove-line-breaks.php)
 then copy and paste the result inside env variables (FIREBASE_SERVICE_ACCOUNT_KEY)

### OpenAI API Key

Sign up at [Platform OpenAI](https://platform.openai.com/) and generate the API Key and add it to .env variables


#### Env Variations

```shell
GOOGLE_OAUTH2_ID=YOUR_APP_ID
GOOGLE_OAUTH2_SECRET=YOUR_APP_SECRET

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=VERY_GOOD_SECRET

OPENAI_API_KEY=YOUR_OPENAI_API_KEY

# Convert myServiceAccountKey value using https://www.textfixer.com/tools/remove-line-breaks.php
# Then paste it here
FIREBASE_SERVICE_ACCOUNT_KEY=YOUR_SERVICE_KEY
FIREBASE_CONFIG=YOUR_APP_CONFIG

DEEPAI_API_KEY=YOUR_APP_API_KEY
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
