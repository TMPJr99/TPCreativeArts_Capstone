
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('canvas').del()
    .then(function () {
      // Inserts seed entries
      return knex('canvas').insert([
        {genre: 'landscape', series:"none", img_location:"images/9th at 9_low res.jpg"},
        {genre: 'abstract', series:"none", size:"8x10", img_location:"images/Abstract Knife unnamed II_low res.jpg"},
        {genre: 'abstract', series:"none", img_location:"images/Space Horse_low res.jpg"},
        {genre: 'abstract', series:"none", img_location:"images/TPonCanvas unnamed 6_low res.jpg"},
        {genre: 'abstract', series:"none", size:"16x20", img_location:"images/Abstract Knife unnamed_low res.jpg"},
        {genre: 'landscape', series:"none", img_location:"images/Aurora_low res.jpg"},
        {genre: 'abstract', series:"none", size:"8x10", img_location:"images/Far Far Away_low res.jpg"},
        {genre: 'abstract', series:"none", img_location:"images/Flower_low res.jpg"},
        {genre: 'impressionist', series:"none", img_location:"images/Mothers Tree 8x10_low res.jpg"},
        {genre: 'impressionist', series:"none", size:"16x20", img_location:"images/Resolute_low res.jpg"},
        {genre: 'landscape', series:"none", img_location:"images/Fire Island_low res.jpg"},
        {genre: 'landscape', series:"none", img_location:"images/Page Springs_8x10_LOW res.jpg"},
      ]);
    });
};
