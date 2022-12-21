const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var aggregatePaginate = require('mongoose-aggregate-paginate-v2');


const Law = new Schema({
    content: {type: String},
    chuong:{type: Number},
    khoan: {type: Number},
    dieu: {type: Number},
    muc: {type: Number},
    priceabove: {type: Number},
    pricebelow: {type: Number},
    
  },{ timestamps: true });

Law.plugin(aggregatePaginate); //second step

module.exports = mongoose.model('law', Law);
