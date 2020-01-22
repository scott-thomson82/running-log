
exports.up = function(knex) {
    return knex.schema.createTable('runlog', (table) => {
        table.increments('id').primary()
        table.string('date')
        table.integer('distance')
        table.integer('time')
        table.integer('avgPace')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('runlog')
};
