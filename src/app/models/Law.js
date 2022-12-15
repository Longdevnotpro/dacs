const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const Law = new Schema({
    summarykey: {type: String},
    content: {type: String},
    chuong:{type: String},
    khoan: {type: String},
    dieu: {type: String},
    muc: {type: String},
    priceabove: {type: String},
    pricebelow: {type: String},
    createAt: {type: Date}
  });

module.exports = mongoose.model('law', Law)