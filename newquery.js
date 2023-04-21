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
      .find({ storeLocation: "Seattle" })
      .toArray()
      .then((response) => {
        console.log(response);
      });
    // .then((collection) => {
    //   collection
    //     .find({})
    //     .toArray()
    //     .then((response) => {
    //       console.log(response);
    //     });
    // });
    // let response = console.log(collection.find({}).toArray());
  } catch (error) {
    console.log("error", error);
  }
}
getdata();
