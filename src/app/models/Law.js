const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Law = new Schema({
    summarykey: {type: String},
    content: {type: String},
    chuong:{type: String},
    khoan: {type: Number},
    dieu: {type: Number},
    muc: {type: Number},
    priceabove: {type: Number},
    pricebelow: {type: Number},
    createAt: {type: Date}
  });

module.exports = mongoose.model('law', Law)