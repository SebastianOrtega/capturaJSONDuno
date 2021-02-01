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
//app.use(bodyParser.urlencoded({ extended: false }));
//console.log("Equipos : ", Equipos.Equipo3[0]);
//app.use(bodyParser.text({ type: "text/*" }));

app.post("*", function (req, res) {
  res.sendStatus(200);

  console.log("************************************************");
  console.log(req.body);
  console.log("================================================");

});

app.listen(PORT, function () {
  console.log("Esperando POST: " + PORT);
});