CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE pomodoros
(
    pomodoro_id uuid DEFAULT uuid_generate_v4(),
    timestamp TIMESTAMPTZ NOT NULL,
    finished BOOLEAN NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (pomodoro_id)
);


INSERT INTO pomodoros
    (finished, task_name, timestamp
VALUES
    ('false', 'Exercise 1', '2016-06-22 19:10:25-07');     