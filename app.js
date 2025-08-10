const express = require('express');
const app = express();
const dbconnect = require('./config/db');
const celularesRoutes = require('./routes/celulares')
const port = 4000;

app.use(express.json());
app.use(celularesRoutes);


//iniciar el servidor 
dbconnect().then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando http://localhost:${port}`)
    })
}).catch(error => {
    console.log('No se pudo iniciar el servidor debido a un error en la base de datos')
})



