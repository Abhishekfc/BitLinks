import clientPromise from "@/lib/mongodb";

export async function GET() {
    try{
        const client = await clientPromise
        const db = client.db('bitLinks')
        const collection = db.collection('url')

        const links = await collection.find().sort({_id : -1}).toArray()

        return Response.json({success : true, data: links})

    }
    catch(error)
    {
        return Response.json({success : false, message: "Something went Wrong!! Try later"}, {status : 500})
    }
}