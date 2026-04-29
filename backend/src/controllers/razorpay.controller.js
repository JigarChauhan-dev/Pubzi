const Razorpay = require("razorpay");

const createOrder = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

  try {
    const { amount } = req.body;

    console.log(amount);

    if (!amount || amount < 50) {
      return res.status(400).send({
        status: false,
        message: "Minimum payment amount is ₹50",
      });
    }

    const option = {
      amount: amount * 100,
      currency: "INR",
    };

    const order = await razorpay.orders.create(option);

    return res.status(200).send({
      status: true,
      message: "Payment Successfully..",
      data: order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = { createOrder };