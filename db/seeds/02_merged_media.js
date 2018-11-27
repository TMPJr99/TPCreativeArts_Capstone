
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('merged_media').del()
    .then(function () {
      // Inserts seed entries
      return knex('merged_media').insert([
        {name: "Canarias Dream", sizes: 1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p64_i4_w375.jpeg"},
        {name: "Resolute On Oak Street", sizes: 1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p54_i3_w472.jpeg"},
        {name: "Aurora Exposure", sizes: 1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p63_i2_w576.jpeg"},
        {name: "Blue Bananas", sizes: 1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p53_i2_w446.jpeg"},
        {name: "Resolute By Riverboats", sizes: 1,  img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p52_i1_w666.jpeg"},
        {name: "Girl in Blue @ the Annex", sizes: 1, img_location:"https://www.tpcreativearts.com/uploads/1/2/1/5/121530489/s657790874324076264_p62_i7_w578.jpeg"}
      ]);
    });
};
