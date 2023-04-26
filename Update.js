const dbConnect = require("./Connect");

const update = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Ankit kumar" },
    {
      $set: { name: "kumar Ankit" },
    }
  );
  console.warn(result);
};
update();
