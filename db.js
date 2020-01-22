const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getLog

}

function getLog (db = connection) {
    return db('runlog').select()
}
