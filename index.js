const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`
  <html>
  <head>
  <title>Enter Message</title>
  </head>
  <body>
  <form action="/product" method="PUT">
  <input type="text" name="title">
  <button type="submit">Send</button>
  </form>
  </body>
  </html>`);
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.send(`${req.body.title} added`);
});

app.use("/", (req, res, next) => {});

app.listen(3000);
