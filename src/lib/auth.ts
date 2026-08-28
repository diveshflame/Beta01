import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

const googleConfigured = Boolean(
  process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
);
const devEnabled = process.env.AUTH_DEV_ENABLED === "true";

const providers = [];

if (googleConfigured) {
  providers.push(Google);
}

if (devEnabled) {
  providers.push(
    Credentials({
      id: "dev",
      name: "Dev Account",
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" },
      },
      async authorize(creds) {
        const email = String(creds?.email || "").trim().toLowerCase();
        if (!email) return null;
        const name = String(creds?.name || "").trim() || email.split("@")[0];
        const user = await db.user.upsert({
          where: { email },
          update: { displayName: name },
          create: { email, name, displayName: name },
        });
        return { id: user.id, name, email: user.email, image: user.image };
      },
    })
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.id && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
