const dbConnect = require("./Connect");

const insert = async () => {
  const database = await dbConnect();
  console.log("database", database);
  const result = await database.insertMany([
    { name: "Demo", roll: 152, year: "3rd" },
    { name: "Ankit kumar", roll: 12, year: "2nd" },
  ]);
  console.log(result);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
