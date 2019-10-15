const mongoose = require('mongoose')
const skema = mongoose.Schema //BUAT TABEL di Mongo
const userskema = new skema({
    nama:{type:String,required:true},            
    kelas:{type:String,required:true},    
    tgl_p:{type:String},
    tgl_k:{type:String},
})
const siswa = mongoose.model('siswa',userskema)
module.exports=siswa