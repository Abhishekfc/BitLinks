 import NextAuth from "next-auth";
 import GoogleProvider from "next-auth/providers/google";
 import clientPromise from "@/lib/mongodb";
 import { MongoDBAdapter } from "@auth/mongodb-adapter";

 export const authOptions ={
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
 };

 const handler = NextAuth(authOptions);
 export { handler as GET, handler as POST}