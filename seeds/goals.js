
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {id: 1, month_goal: 200, week_goal: 50},
      ]);
    });
};
