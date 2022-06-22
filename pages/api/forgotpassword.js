import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { enroll, password } = req.body;

  const url = "mongodb://localhost:27017/LeaseBooks";

  const client = new MongoClient(url);

  await client.connect();

  const data = await client
    .db("LeaseBooks")
    .collection("user")
    .updateOne({ enrollment: enroll }, { password: password });

  if (!data) {
    return res
      .status(205)
      .send("some error occur at server please try after some time");
  } else {
    console.log("success password is changed");
    res.status(200).send("success");
  }
}
