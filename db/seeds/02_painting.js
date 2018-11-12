
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('painting').del()
    .then(function () {
      // Inserts seed entries
      return knex('painting').insert([
        {name: '9th at 9', genre: 'landscape', series:"none", tier:2, img_location:"images/9th at 9_low res.jpg"},
        {name: 'Abstract Knife Unnamed II', genre: 'abstract', series:"canvas", size:"8x10", tier:1, img_location:"images/Abstract Knife unnamed II_low res.jpg"},
        {name: 'Space Horse', genre: 'abstract', series:"none", tier:2, img_location:"images/Space Horse_low res.jpg"},
        {name: 'TPonCanvas unnamed 6', genre: 'abstract', series:"none", tier:1, img_location:"images/TPonCanvas unnamed 6_low res.jpg"},
        {name: 'Abstract Knife unnamed', genre: 'abstract', series:"canvas", tier:2, size:"16x20", img_location:"images/Abstract Knife unnamed_low res.jpg"},
        {name: 'Aurora', genre: 'landscape', series:"none", tier:2, img_location:"images/Aurora_low res.jpg"},
        {name: 'Far Far Away', genre: 'abstract', series:"canvas", size:"8x10", tier:1, img_location:"images/Far Far Away_low res.jpg"},
        {name: 'Flower', genre: 'abstract', series:"none", tier:2, img_location:"images/Flower_low res.jpg"},
        {name: 'Mothers Tree', genre: 'impressionist', series:"none", tier:1, img_location:"images/Mothers Tree 8x10_low res.jpg"},
        {name: 'Resolute', genre: 'impressionist', series:"canvas", tier:2, size:"16x20", img_location:"images/Resolute_low res.jpg"},
        {name: 'Fire Island', genre: 'landscape', series:"none", tier:2, img_location:"images/Fire Island_low res.jpg"},
        {name: 'Page Springs', genre: 'landscape', series:"none", tier:1, img_location:"images/Page Springs_8x10_LOW res.jpg"},
      ]);
    });
};
