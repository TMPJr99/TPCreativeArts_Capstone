const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  shop: (req, res) => {
    knex('canvas')
      .then((results) => {
        res.json(results)
      })
  },
  single: (req, res) => {
    knex('canvas').where('canvas.id', req.params.id)
      .then((results) => {
        res.json(results[0])
      })
  },
}
