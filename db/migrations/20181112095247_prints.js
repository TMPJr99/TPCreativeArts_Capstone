
exports.up = function(knex, Promise) {
  return knex.schema.createTable('prints', (table)=>{
    table.increments();
    table.string('genre');
    table.string('series');
    table.integer('tier');
    table.string('img_location');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prints');
};
