const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},        
    bayar:{type:String,required:true},
    porsi:{type:String},
})
const pembeli = mongoose.model('pembeli',userskema)
module.exports=pembeli