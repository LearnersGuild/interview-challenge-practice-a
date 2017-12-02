const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/practice_challenge_v1_flights')
db.connect()

/**
 * Get the names and flight counts for passengers having at least the minimum
 * requested count
 * @param  {number} minFlightCount Minimum number of flights for a passenger
 *                                  to be included in results
 * @return {Promise}              Promise that resolves to an array of objects.
 *                                  Each object has keys 'name' and 'flightcount'
 */
const getFlightCounts = minFlightCount =>
  db.query(`
    SELECT p.name, COUNT(fp.id) AS flightcount
    FROM passengers AS p
      JOIN flight_passengers AS fp
      ON p.id = fp.passenger_id
    GROUP BY p.name
    HAVING COUNT(fp.id) >= $1
    ORDER BY COUNT(fp.id)`,
    [minFlightCount])

module.exports = {
  getFlightCounts,
}
