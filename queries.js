const { pool } = require("./config");

const getPomodoros = (request, response) => {
  pool.query("SELECT * FROM pomodoros", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPomodoroById = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM pomodoros WHERE pomodoro_id= $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const deletePomodoro = (request, response) => {
  const id = request.params.id;
  pool.query(
    "DELETE FROM pomodoros WHERE pomodoro_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Pomodoro deleted with ID: ${id}`);
    }
  );
};
const addPomodoro = (request, response) => {
  const { pomodoro_id, finished, timestamp, task_name } = request.body;

  pool.query(
    "INSERT INTO pomodoros (pomodoro_id, finished, timestamp, task_name) VALUES ($1, $2, $3, $4)",
    [pomodoro_id, finished, timestamp, task_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results);

      response.status(201).send(`Pomodoro added with ID: ${pomodoro_id}`);
    }
  );
};

const updatePomodoro = (request, response) => {
  const id = request.params.id;
  const { finished, timestamp, task_name } = request.body;

  pool.query(
    "UPDATE pomodoros SET finished = $1, timestamp = $2, task_name = $3 WHERE pomodoro_id = $4",
    [finished, timestamp, task_name, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Pomodoro modified with ID: ${id}`);
    }
  );
};

module.exports = {
  getPomodoros,
  getPomodoroById,
  addPomodoro,
  updatePomodoro,
  deletePomodoro
};
