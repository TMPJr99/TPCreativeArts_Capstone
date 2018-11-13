//Update the name of the controller below and rename the file.
const prints = require("../controllers/prints.js")
const order = require("../controllers/order.js")
const admin = require("../controllers/admin.js")
module.exports = function(app){


}

function authenticate(req, res, next){
  if(!req.session.admin_id){
    res.redirect('/admin');
  }else{
    next();
  }
}
