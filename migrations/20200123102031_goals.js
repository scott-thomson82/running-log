
exports.up = function(knex) {
    return knex.schema.createTable('goals', table => {
        table.increments('id')
        table.string('month_goal')
        table.string('week_goal')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('goals')
  };
