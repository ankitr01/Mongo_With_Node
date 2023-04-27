const dbConnect = require("./Connect");
//const chai = require("./chai");
//var expect = chai.expect;
var expect = require("chai").expect;

const create = async (data) => {
  let database = await dbConnect();
  const result = await database.insertMany(data);
  console.log(result);
  if (result.acknowledged) {
    console.log("data inserted");
  } else {
    console.log("Data not Inserted");
  }
};
const read = async (data1) => {
  let database = await dbConnect();
  const result = await database.find(data1).toArray();
  console.log(result[0].age);
  expect(result[0].age).to.be.equal(25);
  return result;
};

const update = async (data2, query) => {
  console.log("data2", data2);
  let database = await dbConnect();
  let result = await database.updateOne(data2, query);
  console.warn(result);
};

const deleteData = async (data2) => {
  let database = await dbConnect();
  let result = await database.deleteOne(data2);

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
