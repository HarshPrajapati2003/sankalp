const express = require("express");
const cors = require("cors");
const  nodemailer = require("nodemailer");
const fs = require("fs").promises;
const path = require("path");
const dotenv = require('dotenv')
dotenv.config()
const app = express();
app.use(cors());
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

// app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return items[0].price * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// ======================= deployment ============================

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/frontend/build")))
     app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"))
     });
} else {
    app.get("/", (req, res) => {
      res.send("api is running");
    });
}
// ======================= deployment ============================
  
app.post("/api", async (req, res) => {
  const { email, amount, name } = req.body;
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hrsdp2683@gmail.com",
        pass: "bhofvyjhpzyzfghv",
      },
    });
    var mailOptions = {
      from: "hrsdp2683@gmail.com",
      to: email,
      subject:
        "Heartfelt Gratitude for Your Generous Contribution to Sankalp Sahayata",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Generous Contribution</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #3498db;
            text-align: center;
        }

        p {
            text-align: justify;
        }

        .signature {
            text-align: right;
            margin-top: 20px;
        }

        .signature p {
            font-style: italic;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Your Generous Contribution</h1>
        <p>
            Dear ${name},<br><br>

            We extend our heartfelt gratitude for your generous contribution of <b>Rs. ${amount}</b> to SankalpSahayata.
            Your support is instrumental in empowering us to make a positive impact in the lives of those in need.
            With your donation, we are one step closer to achieving our mission and creating a better, more compassionate world.<br><br>

            Your kindness and generosity inspire us to continue our work with dedication and passion.
            Together, we can make a meaningful difference and bring about positive change.
            Thank you for being a valuable part of our community and for making a difference in the lives of others.<br><br>

            Sincerely,<br>
            SankalpSahayata
        </>
        <div class="signature">
            <p>Best Regards,</p>
            <p>SankalpSahayata Team</p>
        </div>
    </div>
</body>
</html>
`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(400).json({ message: "sorry mail is not send" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "mail sent successfully!" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log("Node server listening on port 4242!"));
