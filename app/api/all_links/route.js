import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    const session = await getServerSession(authOptions)

    if(!session){
        return Response.json({success: false, message: "Unauthorized"}, {status: 401})
    }

    try{
        const client = await clientPromise
        const db = client.db('bitLinks')
        const collection = db.collection('url')

        const links = await collection.find({email: session.user.email }).sort({_id: -1}).toArray()
        

        return Response.json({success : true, data: links})

    }
    catch(error)
    {
        return Response.json({success : false, message: "Something went Wrong!! Try later"}, {status : 500})
    }
}