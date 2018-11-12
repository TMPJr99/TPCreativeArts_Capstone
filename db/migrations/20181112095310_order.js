
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('address');
    table.integer('print_id')
      .references('id')
      .inTable('prints')
      .onDelete('CASCADE')
      .index();
    table.integer('canvas_id')
      .references('id')
      .inTable('canvas')
      .onDelete('CASCADE')
      .index();
    table.string('status');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order');
};
