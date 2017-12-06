const path = require('path')
require('dotenv').config({path: path.join(__dirname, '../../.env')})
const pgp = require('pg-promise')()

const connection = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: true
}

const db = pgp(connection)
db.connect()

/**
 * Get the names for passengers on a specific flight
 * @param  {string} flightNumber  Flight number for which to retrieve passenger names.
 * @return {Promise}              Promise that resolves to an array of strings.
 *                                  Each string is a passenger name.
 */
const getFlightPassengers = flightNumber =>
  db.query(`
    SELECT p.name
    FROM passengers AS p
      JOIN flights_passengers AS fp
        ON p.id = fp.passenger_id
      JOIN flights AS f
        ON f.id = fp.flight_id
    WHERE f.flight_number = $1`,
    [flightNumber])

module.exports = {
  getFlightPassengers,
}
