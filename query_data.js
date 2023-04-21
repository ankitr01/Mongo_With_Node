const { MongoClient } = require("mongodb");

const password = encodeURIComponent("tIs8ERybcn7lwoOu");
const uri = `mongodb+srv://testinginforma19:${password}@cluster0.9esbt6t.mongodb.net/sample_supplies?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect(uri);
    console.log("connected to mongo db");
  } catch (error) {
    console.error(error);
  }
}
connect();

async function test() {
  const database = client.db("sample_supplies");
  const collection = database.collection("sales");
  //const result = await collection.insertOne({ name: "Ankit", age: 30 });
  //console.log(result);
  const cursor3 = await collection.find();
  //   const cursor = await collection.findOne({ storelocation: "London" });
  //   const cursor2 = await collection.find({ storelocation: "London" }).toArray();
  //await cursor.(console.log);
  console.log(cursor3);
  //   console.log(cursor.constructor.storelocation);
  //   console.log(cursor2);
  //   console.log(cursor);
  //   console.log("cursor");
}

test();
