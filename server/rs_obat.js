const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},            
    exp:{type:String,required:true},    
})
const obat = mongoose.model('obat',userskema)
module.exports=obat