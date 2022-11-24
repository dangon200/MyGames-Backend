const PORT = process.env.PORT || '3001'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678'
const DB_NAME = process.env.DB_NAME || 'videogames' 
const DB_PORT = process.env.DB_PORT || 'localhost'
const API_KEY = process.env.API_KEY || '72502c81ec8c44bca06eff4ee543fcc9'


module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, API_KEY }