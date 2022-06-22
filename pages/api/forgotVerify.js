import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { code, enroll } = req.body;

  if (!code || !enroll) {
    return res.status(210).send("invalid credentials");
  }

  const url = "mongodb://localhost:27017/LeaseBooks";

  const client = new MongoClient(url);

  await client.connect();

  const data = await client.db("LeaseBooks").collection("forgotOtp").findOne({
    enrollment: enroll,
  });

  if (!data) {
    return res
      .status(205)
      .send(
        "sme error occur at server side please try again or after some time"
      );
  }

  if (String(data.otp) != String(code)) {
    return res.status(215).send("invalid otp send from client");
  } else {
    return res.status(200).send("success");
  }
}
