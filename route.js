const express = require('express')
const router = express.Router()

const db = require('./db')



module.exports = router

router.get('/', (req, res) => {
    res.render('home')
  })

  router.get('/log', (req, res) => {
    db.getRunAndGoals()
    .then(runData => {
      console.log(runData)
      res.render('data', {runData: runData})
    })
})

  router.post('/', (req, res) => {
    const newRun = req.body
    db.addRun(newRun)
    .then(run => {
      res.redirect('/log')
    })
  })



