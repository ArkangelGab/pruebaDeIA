const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());//esta linea es lo mismo que intelar body parsed, me habilita a traer info del body en insomnia
app.use(express.static("public"));

app.post("/", (req, res) => {
    console.log(req.body) ;
    res.send("Hola gatoooo!!!!");
});

app.listen(PORT, () =>
{
    console.log(`escuchando el puerto ${PORT}`)
})