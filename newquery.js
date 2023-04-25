const { MongoClient } = require("mongodb");

const database = "sample_supplies";
const yourcollection = "sales";

const password = encodeURIComponent("tIs8ERybcn7lwoOu");
const uri = `mongodb+srv://testinginforma19:${password}@cluster0.9esbt6t.mongodb.net/sample_supplies?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function getdata() {
  try {
    console.log("entering");
    let result = await client.connect();
    console.log("result");
    let db = result.db(database);
    console.log("getting db", db);
    const collection = db.collection(yourcollection);

    collection
      .find({ "customer.email": "abc" })
      .toArray()
      .then((response) => {
        console.log(response);
        if (response == 0) {
          console.log("No data found");
        }
      });
  } catch (error) {
    console.log("error", error);
  }
}
getdata();
