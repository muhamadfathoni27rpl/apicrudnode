const express = require('express') //NODE JS Framework
const bodyparser = require('body-parser') //Body Parser iku gawe njupuk data ng HTML ("name")
const mongoose = require('mongoose')
const cors = require('cors')
const siswa = require('./server/perpus_siswa'),buku = require('./server/perpus_buku'),penjaga=require('./server/perpus_penjaga')
const pasien = require('./server/rs_pasien'),dokter = require('./server/rs_dokter'),obat = require('./server/perpus_buku')
const menu = require('./server/resto_menu'),pembeli = require('./server/resto_pembeli'),petugas = require('./server/resto_petugas')
const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false})) 
mongoose.Promise = global.Promise  
mongoose.connect("mongodb://localhost:27017/perpus",{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true})
.then(()=>console.log("terhubung bos"))


app.get('/',(req,res)=>res.send("lol"))




//##################################################################################
//##################################################################################
app.get('/perpus/buku',function(req,res){
    buku.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/perpus/penjaga',function(req,res){
    penjaga.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/perpus/siswa',function(req,res){
    siswa.find({},(err,data)=>{
        res.json(data)
    })
})
//################################################################################3
app.get('/resto/menu',function(req,res){
    menu.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/resto/pembeli',function(req,res){
    pembeli.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/resto/petugas',function(req,res){
    petugas.find({},(err,data)=>{
        res.json(data)
    })
})
//################################################################################3
app.get('/rs/dokter',function(req,res){
    dokter.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/rs/obat',function(req,res){
    obat.find({},(err,data)=>{
        res.json(data)
    })
})
app.get('/rs/pasien',function(req,res){
    pasien.find({},(err,data)=>{
        res.json(data)
    })
})














//INSERT
app.post('/perpus/buku',function(req,res){
    const today = new Date()
    const data = {
        buku : req.body.nama,
        genre : req.body.genre,
        total : req.body.total,
        created : today,  
    }    
    buku.findOne({buku : data.buku})  
    .then(barange => {
        if(!barange){                        
                buku.create(data)
                .then(barange=>{res.json({status : barange.buku+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/perpus/penjaga',function(req,res){
    const today = new Date()
    const data = {
        nama : req.body.nama,
        ktp : req.body.ktp,
    }    
    penjaga.findOne({penjaga : data.nama})  
    .then(barange => {
        if(!barange){                        
                penjaga.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/perpus/siswa',function(req,res){
    const today = new Date()
    const data = {
        nama : req.body.nama,
        kelas : req.body.kelas,
        tgl_p : req.body.p,
        tgl_k : req.body.k,
    }    
    siswa.findOne({siswa : data.nama})  
    .then(barange => {
        if(!barange){                        
                siswa.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})















//########################################################################++++++++++++++
app.post('/resto/menu',function(req,res){    
    const data = {
        nama : req.body.nama,
        harga : req.body.harga,      
    }    
    menu.findOne({menu : data.nama})  
    .then(barange => {
        if(!barange){                        
                menu.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/resto/pembeli',function(req,res){    
    const data = {
        nama : req.body.nama,
        bayar : req.body.bayar,
        porsi : req.body.porsi,
    }    
    pembeli.findOne({pembeli : pembeli.nama})  
    .then(barange => {
        if(!barange){                        
                pembeli.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/resto/petugas',function(req,res){    
    const data = {
        nama : req.body.nama,
        ktp : req.body.ktp,
    }    
    petugas.findOne({petugas : data.nama})  
    .then(barange => {
        if(!barange){                        
                petugas.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})












//##########################################????????????????????????????????????????????
app.post('/rs/dokter',function(req,res){    
    const data = {
        nama : req.body.nama,
        umur : req.body.umur,      
    }    
    dokter.findOne({dokter : data.nama})  
    .then(barange => {
        if(!barange){                        
                dokter.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/rs/obat',function(req,res){    
    const data = {
        nama : req.body.nama,
        exp : req.body.exp,        
    }    
    obat.findOne({obat : data.nama})  
    .then(barange => {
        if(!barange){                        
                obat.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
app.post('/rs/pasien',function(req,res){    
    const data = {
        nama : req.body.nama,
        umur : req.body.umur,
    }    
    pasien.findOne({pasien : data.nama})  
    .then(barange => {
        if(!barange){                        
                pasien.create(data)
                .then(barange=>{res.json({status : barange.nama+" Terdaftar ~~SUKSES"})})
                .catch(err=>{res.send("error: "+err)})        
        }else{res.json({error : "EROR : wes Terdaftar"})}
    })
    .catch(err => {res.send("error :"+err)})
})
















//update
app.put('/perpus/buku/:_id',function(req,res){
    const data = {
        buku : req.body.nama,
        genre : req.body.genre,
        total : req.body.total,
    }
    const id = req.params._id    
    buku.findOne({buku : data.buku})  
    .then(barange => {
        if(!barange){        
            buku.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.buku+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/perpus/penjaga/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        ktp : req.body.ktp,
    }
    const id = req.params._id    
    penjaga.findOne({penjaga : data.nama})  
    .then(barange => {
        if(!barange){        
            penjaga.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/perpus/siswa/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        kelas : req.body.kelas,
        tgl_p : req.body.p,
        tgl_k : req.body.k,
    }
    const id = req.params._id    
    siswa.findOne({siswa : data.nama})  
    .then(barange => {
        if(!barange){        
            siswa.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})













//###############################################################ASD
app.put('/resto/menu/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        harga : req.body.harga, 
    }
    const id = req.params._id    
    menu.findOne({menu : data.nama})  
    .then(barange => {
        if(!barange){        
            menu.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/resto/pembeli/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        bayar : req.body.bayar,
        porsi : req.body.porsi,
    }
    const id = req.params._id    
    pembeli.findOne({pembeli : data.nama})  
    .then(barange => {
        if(!barange){        
            pembeli.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/resto/penjaga/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        ktp : req.body.ktp,
    }
    const id = req.params._id    
    penjaga.findOne({penjaga : data.nama})  
    .then(barange => {
        if(!barange){        
            penjaga.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})




















//########################################################
app.put('/rs/dokter/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        umur : req.body.umur, 
    }
    const id = req.params._id    
    dokter.findOne({dokter : data.nama})  
    .then(barange => {
        if(!barange){        
            dokter.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/rs/obat/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        exp : req.body.exp, 
    }
    const id = req.params._id    
    obat.findOne({obat : data.nama})  
    .then(barange => {
        if(!barange){        
            obat.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})
app.put('/rs/pasien/:_id',function(req,res){
    const data = {
        nama : req.body.nama,
        umur : req.body.umur,
    }
    const id = req.params._id    
    pasien.findOne({pasien : data.nama})  
    .then(barange => {
        if(!barange){        
            pasien.findByIdAndUpdate(id,data)
            .then(barange=>{res.json({status : barange.nama+" TerUPDATE ~~SUKSES"})})
            .catch(err=>{res.send("error :"+err)})
        }else{res.json({error : "EROR "})}
    })
    .catch(err=>{res.send("error")})
})

















//DELETE
app.delete('/perpus/buku/:_id',function(req,res){
    const id = req.params._id
    buku.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/perpus/penjaga/:_id',function(req,res){
    const id = req.params._id
    penjaga.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/perpus/siswa/:_id',function(req,res){
    const id = req.params._id
    siswa.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})

//??
app.delete('/resto/menu/:_id',function(req,res){
    const id = req.params._id
    menu.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/resto/pembeli/:_id',function(req,res){
    const id = req.params._id
    pembeli.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/perpus/petugas/:_id',function(req,res){
    const id = req.params._id
    petugas.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
 
//??
app.delete('/rs/dokter/:_id',function(req,res){
    const id = req.params._id
    dokter.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/rs/obat/:_id',function(req,res){
    const id = req.params._id
    obat.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})
app.delete('/rs/pasien/:_id',function(req,res){
    const id = req.params._id
    pasien.findByIdAndRemove(id,(err,results)=>{        
        res.json(id+" TerHAPUS ~~SUKSES")
    })
})





app.listen(8000,()=>console.log('Terhubung ng PORT 8000')) //server