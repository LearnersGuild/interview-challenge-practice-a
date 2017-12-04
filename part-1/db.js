const pgp = require('pg-promise')()

const db = pgp('postgres://tahkfcwmzslrwb:61eb82655eeeb0c912d382a47e40faff599faeb0a4dfe13daa399d0f7c9f8c15@ec2-54-235-86-244.compute-1.amazonaws.com:5432/d5u0urtconbnqe')
db.connect()
