require('dotenv').config({path: require('path').join(__dirname, '../.env')})

const url = require('url')
const pgp = require('pg-promise')()

const {hostname: host, port, pathname, auth} = url.parse(process.env.DATABASE_URL)
const database = pathname ? pathname.slice(1) : undefined
const user = auth ? auth.split(':')[0] : undefined
const password = auth ? auth.split(':')[1] : undefined
const connection = {host, port, database, user, password, ssl: true}

const db = pgp(connection)
db.connect()
