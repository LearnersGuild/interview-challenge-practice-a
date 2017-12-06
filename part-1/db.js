require('dotenv').config({path: '../.env'})
const pgp = require('pg-promise')()

const db = pgp(process.env.DB_URL)
db.connect()
