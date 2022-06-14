import { MongoClient } from "mongodb";
import { string } from "yup";
// import unirest from "unirest";

const accountSid = "ACfeefb2b03938f0c15f601037e5ec90cb";
const authToken = "43ec05cb7db80c6990987d5633a7050b";
const client2 = require("twilio")(accountSid, authToken);

// const sms = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

export default async function handler(req, res) {
  const { name, mobile } = req.body;
  console.log(name);
  console.log(mobile);

  const url = "mongodb://localhost:27017/LeaseBooks";

  const client = new MongoClient(url);

  await client.connect();

  const data = await client.db("LeaseBooks").collection("registerOtp").findOne({
    mobile: mobile,
  });

  let otp;

  if (!data) {
    const ruffOtp = Math.floor(10000 + Math.random() * 900000);
    otp = String(ruffOtp).substring(0, 4);

    const dataInsert = await client
      .db("LeaseBooks")
      .collection("registerOtp")
      .insertOne({
        name: name,
        mobile: mobile,
        otp: otp,
      });

    if (!dataInsert) {
      console.log("fail");
    } else {
      console.log("success");
    }
  } else {
    otp = data.otp;
  }

  console.log(otp);

  // sms.query({
  //   authorization:
  //     "ErBDVJKInZOQGedFPgYvXU61x07qsLTtWSpflNba5yH9mAMz3RdGcgFIrW6UO7l8kyY4ZBxufVbvPQKm",
  //   sender_id: "TXTIND",
  //   message: "This is a test message",
  //   route: "v3",
  //   numbers: "9879207104",
  // });

  // sms.headers({
  //   "cache-control": "no-cache",
  // });

  // sms.end(function (res2) {
  //   if (res2.error) console.log(res2.error);

  //   console.log(res2.body);
  // });

  // await client2.messages
  //   .create({
  //     body: `${otp} is you otp for lease book system`,
  //     from: "+17123544042",
  //     to: "+919879207104",
  //   })
  //   .then((message) => console.log(message));

  res.status(200).send("hello");
}
