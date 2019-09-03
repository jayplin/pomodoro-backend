const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//default route
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/pomodoros", db.getPomodoros);
app.get("/pomodoros/:id", db.getPomodoroById);
app.post("/pomodoros", db.addPomodoro);
app.put("/pomodoros/:id", db.updatePomodoro);
app.delete("/pomodoros/:id", db.deletePomodoro);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
