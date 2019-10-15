const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},        
    harga:{type:String,required:true},
})
const menu = mongoose.model('menu',userskema)
module.exports=menu