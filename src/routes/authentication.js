import express from 'express'
import { createUser } from '../actions/signUp'
import validateUser from '../actions/signIn'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req, res) => {
  const { name, email, password } = req.body
  return createUser(name, email, password)
    .then((newUser) => {
      req.session.user = newUser.id
      res.redirect('/')
    })
    .catch(console.error)
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in')
})

router.post('/sign-in', (req, res) => {
  const { email, password } = req.body
  validateUser(email, password)
    .then((user) => {
      req.session.user = user.id
      res.redirect('/')
    })
    .catch((error) => {
      console.log(error)
      res.redirect('/sign-in')
    })
})

module.exports = router
