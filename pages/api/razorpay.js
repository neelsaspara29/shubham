const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: "rzp_test_MGGUtHYSNUN9C5",
      key_secret: "OeaDNbnJfvqHmZ6UD01JLTAg",
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: JSON.parse(req.body).amount*100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}