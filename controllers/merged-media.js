const knex = require("../db/knex.js");

module.exports = {

  shop: (req, res) => {
    knex('merged_media')
      .then((results) => {
        res.json(results)
      })
  },
  single: (req, res) => {
    knex('merged_media').where('merged_media.id', req.params.id)
    .join('print_sizes', 'merged_media.sizes', 'print_sizes.id')
      .then((results) => {
        res.json(results[0])
      })
  },
}
