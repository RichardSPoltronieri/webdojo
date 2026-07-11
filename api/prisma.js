require('dotenv').config()

const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const { Pool } = require('pg')

console.log('DATABASE_URL:', process.env.DATABASE_URL)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

pool.on('connect', () => {
  console.log('Pool conectado')
})

pool.on('error', (err) => {
  console.error(err)
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({
  adapter,
})

module.exports = prisma