const express = require('express');
const { getFlightCounts } = require('./db/db');

const app = express();
app.use(express.static('public'));
// app.set('view engine', 'pug');
// app.set('view engine', 'ejs')

app.get('/flight_counts', (req, res) => {
  const minFlightCount = req.query.minFlightCount;
  getFlightCounts(minFlightCount)
    .then((flightCounts) => {
      res.render('flight_counts', { minFlightCount, flightCounts });
    })
    .catch((err) => {
      res.render('flight_counts', { message: `An error occurred: ${err.toString()}` });
    })
    .catch(console.error);
});

app.listen(3000, () => console.log('Flying high on port 3000!'));
