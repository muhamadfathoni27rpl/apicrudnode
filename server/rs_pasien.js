const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},        
    umur:{type:String,required:true},    
})
const pasien = mongoose.model('pasien',userskema)
module.exports=pasien