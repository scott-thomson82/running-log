
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('runlog').del()
    .then(function () {
      // Inserts seed entries
      return knex('runlog').insert([
        {id: 1, date: '22/01/2020', distance: 2.64, time: 19.36, avgPace: 7.25},
        {id: 2, date: '22/01/2020', distance: 2.64, time: 19.36, avgPace: 7.25},
        {id: 3, date: '22/01/2020', distance: 2.64, time: 19.36, avgPace: 7.25},
        {id: 4, date: '22/01/2020', distance: 2.64, time: 19.36, avgPace: 7.25}
      ]);
    });
};
