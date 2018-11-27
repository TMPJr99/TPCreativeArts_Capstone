//Update the name of the controller below and rename the file.
const prints = require("../controllers/prints.js")
const canvas = require("../controllers/canvas.js")
const merged_media = require("../controllers/merged-media.js")


module.exports = function(app){

  //PRINTS
  app.get('/prints', prints.shop);
  app.get('/prints/:id', prints.single);
  //CANVAS
  app.get('/canvas', canvas.shop);
  app.get('/canvas/:id', canvas.single);
  //MERGED MEDIA
  app.get('/merged_media', merged_media.shop);
  app.get('/merged_media/:id', merged_media.single);

};
