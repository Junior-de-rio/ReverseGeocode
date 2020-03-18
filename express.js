const express = require('express')
const app=express()
const fs=require('fs')
var directory=__dirname+"\\coordinates.txt"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,PUT,PATCH, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','*',)
    next()
})

app.post('/coordinates',(req,res)=>{

    let outPut="";
    if(req.body!=null){
        console.log("Corps de la requete entrante:")
        console.log(req.body)
        outPut="\n"+req.body.lat+";"+req.body.long+";"+req.body.address
        fs.writeFileSync(directory,outPut,{flag:'a+'})
    }
    res.status(200).send('Fin de traitement de la requete')
})

app.use('/',(req,res)=>{
    res.send('Hello world');
})

module.exports= app
