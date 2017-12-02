const express = require('express');
const { getFlightCounts } = require('./db/db');

// JSDoc for getFlightCounts
/**
 * Get the names and flight counts for passengers having at least the minimum
 * requested count
 * @param  {number} minFlightCount Minimum number of flights for a passenger
 *                                  to be included in results
 * @return {Promise}              Promise that resolves to an array of objects.
 *                                  Each object has keys 'name' and 'flightcount'
 */

const app = express();
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.listen(3000, () => console.log('Flying high on port 3000!'));
