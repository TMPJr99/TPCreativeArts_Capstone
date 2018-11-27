const knex = require("../db/knex.js");

module.exports = {

  shop: (req, res) => {
    knex('prints')
      .then((results) => {
        res.json(results)
      })
  },
  single: (req, res) => {
    knex('prints').where('prints.id', req.params.id)
    .join('print_sizes', 'prints.sizes', 'print_sizes.id')
      .then((results) => {
        res.json(results[0])
      })
  },
}
