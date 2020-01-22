
const config = require('./knexfile').development
const knex = require('knex')

const database = knex(config)


module.exports = {
    getAll,
    addRun,
    getRunAndGoals
}

function getAll(db = database) {
    return db('runlog')
}

function addRun(newRun, db = database) {
    console.log(newRun)
    return db('runlog')
        .insert(newRun)
}

function getRunAndGoals(db = database) {
    return db('runLog')
    .join('goals', 'runLog.run_id', '=', 'goals.id')

}

