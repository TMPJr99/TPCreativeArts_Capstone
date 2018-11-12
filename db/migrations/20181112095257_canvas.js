
exports.up = function(knex, Promise) {
  return knex.schema.createTable('canvas', (table)=>{
    table.increments();
    table.string('name');
    table.string('genre');
    table.string('series');
    table.string('size');
    table.string('img_location');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('canvas');
};
