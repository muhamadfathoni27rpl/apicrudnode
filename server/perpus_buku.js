const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    buku:{type:String,required:true},        
    genre:{type:String,required:true,unique:true},
    total:{type:Number,required:true},
    date:{type:Date,default:Date.now}
})
const buku = mongoose.model('buku',userskema)
module.exports=buku