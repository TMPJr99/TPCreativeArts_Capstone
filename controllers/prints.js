const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: (req, res) => {
    let admin = req.session.admin_id
    if (!req.session.cart) {
      req.session.cart = [];
    }
    if (!req.session.total) {
      req.session.total = 0;
    }
    knex('painting').then((result) => {
      res.json(result);
    })
  },

  shop: (req, res) => {
    let admin = req.session.admin_id;
    knex('painting')
      .then((results) => {
        let acc = [];
        for(let i = 0; i < results.length; i++){
          if(results[i].series !== "canvas"){
            acc.push(results[i])
          }
        }
        res.json(results);
      })
  },

  canvas: (req, res) => {
    let admin = req.session.admin_id;
    knex('painting').where('series', 'canvas')
      .then((results) => {
        res.json(results);
      })
  },
}
