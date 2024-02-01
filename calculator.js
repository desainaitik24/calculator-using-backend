const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true 
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var opr = req.body.opr;
  var num2 = Number(req.body.num2);
  switch (opr) {
    case '+':
      var result = num1 + num2;
      break;
    case '-':
      var result = num1 - num2;
      break;
    case '*':
      var result = num1 * num2;
      break;
    case '/':
      var result = num1 / num2;
      break;
    default:
      break;
  }
  res.send("<h1>" + result+ "</h1>");
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("<h1>Your BMI is : " + bmi+"</h1>");
});

app.listen("3000", () => {
  console.log("Server has started on PORT 3000");
});