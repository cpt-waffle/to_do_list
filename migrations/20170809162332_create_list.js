
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list',function(table) {
    table.increments();
    table.string('title');
    table.integer('type');
    // 1 - Film
    // 2 - Restaraunt
    // 3 - Books
    // 4 - Products
    // 5 - Other
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('list');
};
