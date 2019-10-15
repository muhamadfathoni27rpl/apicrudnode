const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},        
    ktp:{type:String,required:true},    
})
const petugas = mongoose.model('petugas',userskema)
module.exports=petugas