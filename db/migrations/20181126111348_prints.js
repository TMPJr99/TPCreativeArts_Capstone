
exports.up = function(knex, Promise) {
  return knex.schema.createTable('prints', (table)=>{
    table.increments();
    table.string('name');
    table.string('genre');
    table.string('series');
    table.integer('tier');
    table.integer('sizes')
      .references('id')
      .inTable('print_sizes')
      .onDelete('CASCADE')
      .index();
    table.string('img_location');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prints');
};
