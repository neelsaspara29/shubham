import { MongoClient } from "mongodb";
// const bcrypt = require('bcrypt');

const fun = async (enroll, name, number, password) => {
  try {
    const uri = "mongodb://localhost:27017/LeaseBooks";
    const client = new MongoClient(uri);
    await client.connect();
    // password =  bcrypt.genSalt(10, function(err, salt) {
    //      bcrypt.hash("mynameisshubhamandiamshubham", salt, function(err, hash) {
    //          return hash;
    //     });
    // });
    await client
      .db("LeaseBooks")
      .collection("user")
      .insertOne({
        id_by_me: enroll + name,
        name: name,
        enrollment: enroll,
        mobile: number,
        password: password,
      });

    client.close();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default async function handler(req, res) {
  const { enroll, name, mobile, password } = req.body;
  let data = await fun(enroll, name, mobile, password);
  if (data) {
    res.status(200).json({ data: true });
  } else
    res.status(404).send({
      message: "Invalid info",
    });
}
