
exports.up = function(knex, Promise) {
  return knex.schema.table('lists', function(table, promise) {
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('lists', function(table, promise) {
    table.dropColumn('user_id');
  });
};
