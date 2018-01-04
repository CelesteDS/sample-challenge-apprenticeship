import db from '../db'

const validateUser = (email, password) => {
  return db.one('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password])
}

module.exports = validateUser
