const dbConnect = require("./Connect");

const read = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "Ankit kumar" }).toArray();
  console.log(data);
};

read();
