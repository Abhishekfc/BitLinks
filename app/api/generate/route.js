import clientPromise from "@/lib/mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if(!session){
    return Response.json({success: false, message: "Unauthorized"}, {status: 401})
  }

  const body =await request.json()
  const client = await clientPromise
  const db = client.db("bitLinks")
  const collection = db.collection("url")

  //check if the short url exist
  const doc = await collection.findOne({shorturl: body.shorturl})
  if(doc){
    return Response.json({success: false, error: true, message:"URL already exist"})
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
    email: session.user.email // Add user's email here
  })

  return Response.json({ success: true, error: false, message: 'URL generated successfully  ' })
}