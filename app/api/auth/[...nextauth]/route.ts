// import { handlers } from "../authConfig"; // Referring to the auth.ts we just created
// export const { GET, POST } = handlers;

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
