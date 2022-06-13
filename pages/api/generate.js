export default async function handler(req, res) {
  const { name, mobile } = req.body;
  console.log(name);
  console.log(mobile);
}
