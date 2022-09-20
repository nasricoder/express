const express = require('express')
const app = express()
const port = 5000

var aujourdhui = new Date()
var today = aujourdhui.getDay()
var heure = aujourdhui.getHours()
 
const MiddleWare=(req,res,next)=>{
   
    if(today == 0 || today == 6 || heure >= 17 || heure <= 9)
    {
        return res.send('msakrin')
    }

    next()
}

app.use(MiddleWare)
 app.get('/Home',(req,res)=>{
      res.sendFile(__dirname+'/public/Home.html')
 })
 app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/Service',(req,res)=>{
    res.sendFile(__dirname+'/public/service.html')
})

app.get('/Style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
} )

app.listen(port,console.log(`server is running on the port ${port}`))