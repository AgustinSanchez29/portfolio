const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.sendFile("/home/asanchez/Documents/mine/portfolio/pagina.html");
})


app.listen(3000,()=>{console.log("todo ok en el 3000")})