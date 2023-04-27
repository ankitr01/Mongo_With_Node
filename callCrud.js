const { create, update, deleteData, read } = require("./crudOperations");

//create({ name: "New Ankit", age: 27, roll: 143 });
const abc = read({ name: "kumar Ankit" });
console.log("abc", abc[2]);
//update({ name: "egrqwehgfqwe" }, { $set: { name: "kumar Ankit" } });
