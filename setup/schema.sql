DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS passengers CASCADE;
DROP TABLE IF EXISTS flights_passengers CASCADE;

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  flight_number VARCHAR(8)
);

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE flights_passengers (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flights,
  passenger_id INTEGER REFERENCES passengers
);
