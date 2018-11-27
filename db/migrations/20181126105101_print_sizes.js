
exports.up = function(knex, Promise) {
  return knex.schema.createTable('print_sizes', (table)=>{
    table.increments();
    table.string('size1');
    table.string('size2');
    table.string('size3');
    table.string('size4');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('print_sizes');
};
