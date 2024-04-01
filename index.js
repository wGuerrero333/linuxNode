import  express  from "express"
import morgan from "morgan"
const app = express()

app.get("/", (req,res)=>{res.send("RUTA OK")})

app.get("/render", (req,res)=>{res.render("./index.ejs", {variable: "Variable desde la ruta"})})

app.post("/post", (req,res)=>{res.send("Post OK")})

app.post("/form", (req,res)=>{
    const nombre = req.body.nombre;
    const email = req.body.email;

    console.log(nombre)

})

app.use(morgan('dev'))
const port = process.env.PORT || 3000;

app.listen(port)
console.log("Escuchandome por puerto "+port)

