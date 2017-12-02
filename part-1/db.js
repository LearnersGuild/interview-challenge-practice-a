const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/practice_challenge_v1_flights')
db.connect()
