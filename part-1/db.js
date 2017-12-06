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
