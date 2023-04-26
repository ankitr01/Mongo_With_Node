const dbConnect = require("./Connect");

const create = async (data) => {
  const database = await dbConnect();
  console.log("database", database);
  const result = await database.insertMany(data);
  console.log(result);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
const read = async (data1) => {
  let data = await dbConnect();
  data = await data.find(data1).toArray();
  console.log(data);
};

const update = async (data2) => {
  let data = await dbConnect();
  let result = await data.updateOne(data2);
  console.warn(result);
};

const deleteData = async (data2) => {
  let data = await dbConnect();
  let result = await data.deleteOne(data2);

  console.warn(result);
  if (result.acknowledged) {
    console.log("Record is deleted");
  }
};

module.exports = {
  create,
  read,
  update,
  deleteData,
};
