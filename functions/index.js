const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')
('sk_test_51HRISqJhNnPsqlldbEKIjivMMdCp9J7OveNPwGTQ0votGE3FKXRT41Ku9hj9Mti5KjNnFdRlLWdY0Pl8PnVGUKb100QnJdEN6B')

// API

// - App  Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

// app.get('/amrit', (request, response) => response.status(200).send('HELLO AMRIT ....'))

app.post("/payments/create", async(request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app)


//http://localhost:5001/clone-app-a4060/us-central1/api
