
exports.up = function(knex) {
    // grad the geese table then add a column called color that takes 48 chars max
  return knex.schema.table('geese', tbl => {
      tbl.string('color', 48);
  })
};

exports.down = function(knex) {
  return knex.schema.table('geese', tbl => {
      tbl.dropColumn('color');
  })
};
