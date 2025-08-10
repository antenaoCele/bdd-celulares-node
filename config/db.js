const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbGestorCelulares");
        console.log("la conexion a la base de datos, fue exitosa");
    } catch (error) {
        console.error('error en la conexion a la base de datos', error)
        process.exit(1);
    }
}

module.exports = dbconnect; 