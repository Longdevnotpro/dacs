const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var aggregatePaginate = require('mongoose-aggregate-paginate-v2');

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

Law.plugin(aggregatePaginate); //second step

module.exports = mongoose.model('law', Law);
