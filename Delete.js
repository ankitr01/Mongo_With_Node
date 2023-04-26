const dbConnect = require("./Connect");

const deleted = async () => {
  let data = await dbConnect();
  let result = data.deleteOne({ name: "kumar Ankit" });

  console.warn(result);
  if (result.acknowledged) {
    console.log("Record is deleted");
  }
};

deleted();
