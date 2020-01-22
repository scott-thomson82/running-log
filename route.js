const express = require('express')
const router = express.Router()

const db = require('./db')



module.exports = router

router.get('/', (req, res) => {
    res.render('home')
  })

  router.get('/log', (req, res) => {
    db.getAll()
    .then(runData => {
      console.log(runData)
      res.render('data', {runData: runData})
    })

    
  })



