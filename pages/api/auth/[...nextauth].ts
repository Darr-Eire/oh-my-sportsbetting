import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
     async authorize(credentials) {
  if (
    credentials?.username === process.env.ADMIN_USERNAME &&
    credentials?.password === process.env.ADMIN_PASSWORD
  ) {
    return {
      id: '1',    // <-- string, NOT number
      name: 'Admin',
    };
  }
  return null;
}

    }),
  ],
  // ...other NextAuth config
};

export default NextAuth(options);
