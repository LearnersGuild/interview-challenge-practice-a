DROP DATABASE IF EXISTS practice_challenge_v1_flights;
CREATE DATABASE practice_challenge_v1_flights;

\c practice_challenge_v1_flights

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  flight_number VARCHAR(8)
);

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE flight_passengers (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flights,
  passenger_id INTEGER REFERENCES passengers
);
