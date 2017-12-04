DROP TABLE IF EXISTS flight_passengers;
DROP TABLE IF EXISTS flights;
DROP TABLE IF EXISTS passengers;

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
