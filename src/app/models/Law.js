const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const Law = new Schema({
    summarykey: {type: String},
    content: {type: String},
    chuong:{type: String, default:0},
    khoan: {type: Number, default:0},
    dieu: {type: Number, default:0},
    muc: {type: Number, default:0},
    priceabove: {type: Number, default:0},
    pricebelow: {type: Number, default:0},
    createAt: {type: Date}
  });

Law.plugin(aggregatePaginate); //second step

module.exports = mongoose.model('law', Law);
