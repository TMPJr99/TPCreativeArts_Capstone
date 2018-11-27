
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('print_sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex('print_sizes').insert([
        {size1: '8" x 10"', size2: '11" x 14"', size3: '12" x 16"', size4: '16" x 20"'},
        {size1: '8" x 8"', size2: '12" x 12"', size3: '16" x 16"'},
      ]);
    });
};
