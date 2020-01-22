
const config = require('./knexfile').development
const knex = require('knex')

const db = knex(config)


module.exports = {
    getAll

}

function getAll() {
    return db('runlog')
  }

