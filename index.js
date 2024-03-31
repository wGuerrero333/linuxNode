import  express  from "express"
const app = express()

app.get("/", (req,res)=>{res.send("RUTA OK")})

app.get("/render", (req,res)=>{res.render("./index.ejs")})


console.log("Heyyy")
var port = process.env.PORT || 3000;

app.listen(port)
console.log("Escuchandome por puerto "+port)

