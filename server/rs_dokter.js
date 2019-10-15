const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},        
    umur:{type:String,required:true},    
})
const dokter = mongoose.model('dokter',userskema)
module.exports=dokter