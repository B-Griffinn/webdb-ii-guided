// collection of steps that record all changes that happen to our schema on a database
// every database schema change should be done through a migration


  // changes made to the db schema
exports.up = function(knex) {
    return knex.schema.createTable('geese', function(tbl) {
        // a primary key, named 'id' that is an integer and auto increments
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
};


// how to undo/delete the changes made to the db schema
// manual 'undo'
exports.down = function(knex) {
  return knex.schema.dropTableIfExist('geese');
};
