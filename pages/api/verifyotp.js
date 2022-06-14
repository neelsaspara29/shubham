import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { code, mobile } = req.body;

  const url = "mongodb://localhost:27017/LeaseBooks";

  const client = new MongoClient(url);

  await client.connect();

  const data = await client.db("LeaseBooks").collection("registerOtp").findOne({
    mobile: mobile,
  });

  if (!data) {
    return res.status(405).send("error");
  }

  if (data.otp != code) {
    return res.status(210).send("invalid otp");
  }

  if (data.otp == code) {
    const dataDeleted = client
      .db("LeaseBooks")
      .collection("registerOtp")
      .findOneAndDelete({
        mobile: mobile,
      });

    if (dataDeleted) {
      return res.status(200).send("success");
    } else {
      return res.status(405).send("error occur");
    }
  }
}
