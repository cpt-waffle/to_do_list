
exports.up = function(knex, Promise) {
  return knex.schema.renameTable('list', 'lists');

};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('lists', 'list');
};
