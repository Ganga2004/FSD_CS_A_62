const { MongoClient } = require("mongodb");
const Mongo_URL = "mongodb+srv://admin:admin123@cluster0.v4ru3.mongodb.net/FSD-CS-A"

const connectDB = async () => {
    const client = new MongoClient(Mongo_URL)
    try {
        await client.connect();
        console.log("MogoDB Connected");
        const db = await client.db("FSD-CS-A")
        const userCollection = await db.collection("users")
        const data1 = await userCollection.find().toArray()
        console.log("users", data1)
        const newUser = { name: "Gaurav", email: "gk@example.com", password: "gk123" }
        const result = await userCollection.insertOne(newUser)
        console.log("New User", result)
        const data2 = await userCollection.find().toArray()
        console.log("users", data2)
    } catch (error) {
        console.log("DB Error", error.message);
    } finally {
        client.close();
    }
}

connectDB()