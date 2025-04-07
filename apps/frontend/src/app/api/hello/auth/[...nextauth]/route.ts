import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { getEnvVariable } from '@/utils/env';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: getEnvVariable('KEYCLOAK_CLIENT_ID'),
      clientSecret: getEnvVariable('KEYCLOAK_CLIENT_SECRET'),
      issuer: getEnvVariable('KEYCLOAK_ISSUER'),
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
