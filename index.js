const express = require('express')
const productos = require('./data/productos.json')
const app = express()
const PORT = "3005"

app.get('/productos', ( _ , res) => {
    res.status(200).json(productos)
})

app.get('/productos/:id', ( req , res) => {
    const idProd = req.params.id

    if(isNaN(idProd)) {
        res.status(400).json({message: `Parametro de id incorrecto`})
        return
    }

    const producto = productos.find(p => p.id === +idProd)
    if (!producto) {
        res.status(404).json({message:`El producto con id ${idProd} no se encuentra`})
        return
    }
    res.status(200).json(producto)
})

app.post('/productos', (req, res) => {
     
})

app.listen(PORT, (err) => {
    if(err) {
        console.error(err.message)
        process.exit(1)
    }
    console.log(`La aplicacion esta escuchando en el puerto ${PORT}`) //interpolacion
})

