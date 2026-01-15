import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock hardcoded user
        // In a real app, verify against database
        if (credentials.email === "user@drivenow.com" && credentials.password === "123456") {
          return { id: "1", name: "John Doe", email: "user@drivenow.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "967f95a0-ec05-4c36-a4ea-37c065a0516c",
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  debug: true, // Enable debug messages in development
};
