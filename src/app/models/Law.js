const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var aggregatePaginate = require('mongoose-aggregate-paginate-v2');


const Law = new Schema({
    content: {type: String},
    chuong:{type: String, default:'Đang cập nhật..'},
    khoan: {type: String, default:'Đang cập nhật..'},
    dieu: {type: String, default:'Đang cập nhật..'},
    muc: {type: String, default:'Đang cập nhật..'},
    priceabove: {type: String, default:'Đang cập nhật..'},
    pricebelow: {type: String, default:'Đang cập nhật..'},
    
  },{ timestamps: true });

Law.plugin(aggregatePaginate); //second step

module.exports = mongoose.model('law', Law);
