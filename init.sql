CREATE TABLE pomodoros
(
    pomodoro_id VARCHAR (255) NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    finished BOOLEAN NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (pomodoro_id)
);


INSERT INTO pomodoros
    (pomodoro_id, finished, task_name, timestamp
VALUES
    ('primkey', 'false', 'testEntry', '2016-06-22 19:10:25-07');     