import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { enroll } = req.body;

  console.log("enrollment number is ", enroll);

  const url = "mongodb://localhost:27017/LeaseBooks";

  const client = new MongoClient(url);

  await client.connect();

  //first check that client exist or not
  const mainData = await client.db("LeaseBooks").collection("user").findOne({
    enrollment: enroll,
  });

  console.log("main data --->", mainData);

  //if not exist than throw error end inform to client return with status 200
  if (!mainData) {
    console.log("fail to send data");
    return res.status(210).send("nouser with this enrollment exist in system");
  }

  // if user found than check that otp is alredy send or not
  const data = await client.db("LeaseBooks").collection("forgotOtp").findOne({
    enrollment: enroll,
  });

  // let data;

  console.log("data get from registerOtp ---> ", data);

  let otp;

  if (data) {
    otp = data.otp;

    console.log("data availbale and success");
  } else {
    const ruffOtp = Math.floor(10000 + Math.random() * 900000);
    otp = String(ruffOtp).substring(0, 4);

    const data2 = await client
      .db("LeaseBooks")
      .collection("forgotOtp")
      .insertOne({
        otp: otp,
        enrollment: enroll,
        mobile: mainData.mobile,
      });

    console.log("data not available but send to client");
    console.log(data2);

    if (!data2) {
      console.log("data is not available but send to client");
      return res.status(205).send("some error occur in system");
    }
  }

  return res.status(200).send("successfull");
}
