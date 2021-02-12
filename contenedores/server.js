//const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("*", function (req, res) {
  res.sendStatus(200);

  console.log("************************************************");
 // req.body.tags?.map((tag) => console.log(tag.fields)); 
 // req.body.tags.map((tag) => console.log(tag.fields));
  console.log("||||||||||||||||||||||||||||||||||||||||||||||||");
  console.log(req.body);
  console.log("================================================");
});

app.listen(PORT, function () {
  console.log("Esperando POST: " + PORT);
});
