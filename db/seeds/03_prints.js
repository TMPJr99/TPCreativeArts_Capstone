
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prints').del()
    .then(function () {
      // Inserts seed entries
      return knex('prints').insert([
        {name: "9th at 9", genre: 'landscape', series:"none", sizes: 1, tier:2, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p5_i1_w640.jpeg"},
        {name: "Abstract Knife unnamed II", genre: 'abstract', series:"none", sizes: 1, tier:1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p20_i1_w288.jpeg"},
        {name: "Space Horse", genre: 'abstract', series:"none", sizes: 1, tier:2, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p24_i3_w640.jpeg"},
        {name: "TPonCanvas unnamed 6", genre: 'abstract', series:"none", sizes: 1, tier:1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p17_i1_w640.jpeg"},
        {name: "Abstract Knife unnamed", genre: 'abstract', series:"none", sizes: 1, tier:2,  img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p19_i1_w216.jpeg"},
        {name: "Aurora", genre: 'landscape', series:"none", sizes: 2, tier:2, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p6_i1_w640.jpeg"},
        {name: "Far Far Away", genre: 'abstract', series:"none", sizes: 1, tier:1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p27_i1_w640.jpeg"},
        {name: "Flower", genre: 'abstract', series:"none", sizes: 1, tier:2, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p2_i1_w640.jpeg"},
        {name: "Mothers Tree", genre: 'impressionist', series:"none", sizes: 1, tier:1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p4_i1_w640.jpeg"},
        {name: "Resolute", genre: 'impressionist', series:"none", sizes: 1, tier:2,  img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p28_i2_w504.jpeg"},
        {name: "Fire Island", genre: 'landscape', series:"none", sizes: 1, tier:2, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p7_i2_w216.jpeg"},
        {name: "Page Springs", genre: 'landscape', series:"none", sizes: 1, tier:1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p21_i1_w640.jpeg"},
      ]);
    });
};
