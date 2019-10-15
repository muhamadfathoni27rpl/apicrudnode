const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},            
    ktp:{type:Number,required:true}    
})
const penjaga = mongoose.model('penjaga',userskema)
module.exports=penjaga