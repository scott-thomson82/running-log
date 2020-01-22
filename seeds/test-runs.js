
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('runlog').del()
    .then(function () {
      // Inserts seed entries
      return knex('runlog').insert([
        {id: 1, date: '22/01/2020', distance: 5.44, time: 25.36, avgPace: 5.25, run_id: 1},
        {id: 2, date: '23/01/2020', distance: 2.64, time: 13.10, avgPace: 5.45, run_id: 2},
        {id: 3, date: '24/01/2020', distance: 6.53, time: 29.40, avgPace: 6.25, run_id: 3},
        {id: 4, date: '25/01/2020', distance: 10.64,time: 50.36, avgPace: 4.01, run_id: 4}
      ]);
    });
};
