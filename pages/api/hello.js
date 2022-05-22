// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
var data;
const fun = async (doc,department, semester) => {
  const uri = "mongodb://localhost:27017/LeaseBooks";
  const client = new MongoClient(uri);
  await client.connect();
  // var b_name=["Renewable Energy Engineering","Product Design and Value Engineering","Rapid Prototyping","Quality Engineering"]
  // var s_code=["2181910","2181913","2181914","2181920"]
  // var sub = ["REE", "PDVE", "RP", "QE"];
  // [0, 1, 2, 3].forEach(async (i) => {
    
  //  await client.db("LeaseBooks").collection("mechanical").insertOne({
  //     d_name: "Mechanical Engineering",
  //     sem: "8",
  //     subject: sub[i],
  //     s_code: s_code[i],
  //     b_name: b_name[i],
  //     price: 100,
  //  })
    
  // })
  const cursor = client.db("LeaseBooks").collection(doc).find({ d_name: department, sem: semester });
  const results = await cursor.toArray();

  return results;
}
export default async function handler(req, res) {
  let doc = req.query.dep.split(" ");
  doc = doc[0].toLowerCase();
  let data = await fun(doc,req.query.dep, req.query.sem);
  res.status(200).json({data:data});
}
