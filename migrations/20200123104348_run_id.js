
exports.up = function(knex) {
    return knex.schema.table('runlog', table => {
        table.integer('run_id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.table('runlog', table => {
        table.dropColumn('run_id')
    })
  
};
