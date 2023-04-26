const { Collection } = require("mongodb");
const dbConnect = require("./Connect");

const insert = async () => {
  const database = await dbConnect();
  const result = await database.insert([
    { name: "Demo", roll: 152, year: "3rd" },
    //{ name: "Ankit kumar", roll: 12, year: "2nd" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
