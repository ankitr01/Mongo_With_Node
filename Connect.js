const { MongoClient } = require("mongodb");

const database = "mydatabase";
const yourcollection = "salesnew";

const password = encodeURIComponent("tIs8ERybcn7lwoOu");
const uri = `mongodb+srv://testinginforma19:${password}@cluster0.9esbt6t.mongodb.net/mydatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function dbConnect() {
  try {
    console.log("entering");
    let result = await client.connect();
    //console.log("result");
    let db = result.db(database);
    //console.log("getting db", db);
    const collection = db.collection(yourcollection);
    return collection;
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = dbConnect;
