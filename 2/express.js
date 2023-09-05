const express = require("express");
const app = express();

app.disable("x-powered-by");

app.use("/pokemon/*", (req, res, next) => {
  console.log("first middleware que sólo afecta a la ruta /pokemon/*");
  next();
});


app.use(express.json()) // esto reemplaza el código de abajo
// Middleware para cambiar el req.body de UN POST
// app.use((req,res,next)=>{
//     if(req.method !== 'POST')return next()
//     if(req.headers['content-type'] !== 'application/json') return next()

//     // Entonces, a este middleware sólo llegan request que son POST y que tienen el header Content-Type: 'application/json'
//     let body = "";

//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);

//     data.timestamp = Date.now();

//     data.author = "Javi";
//     data.name ='Pedro'
//     req.body = data
//     next()
//   });

// })

const ditto = require("./pokemon/ditto.json");
app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
    res.status(201).json(req.body)
});

app.use((req, res) => {
  res.status(404).send("<h1>404NotFound</h1>");
});

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`);
});
