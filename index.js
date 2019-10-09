const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
}); 
//default route
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/pomodoros", db.getPomodoros);
app.get("/pomodoros/:id", db.getPomodoroById);
app.post("/pomodoros", db.addPomodoro);
app.put("/pomodoros/:id", db.updatePomodoro);
app.delete("/pomodoros/:id", db.deletePomodoro);

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`);
});
