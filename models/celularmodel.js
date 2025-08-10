const mongoose = require('mongoose');

//definimos el esquema de celulares
const celularSchema = new mongoose.Schema(
    {
        modelo: {
            type: String,
            required: true
        },

        marca: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true,
            min: 0
        },
        almacenamiento: {
            type: Number,
            required: true
        },
        ram: {
            type: Number,
            required: true
        },
        sistemaOperativo: {
            type: String,
            enum: ['IOS', 'Android', 'Otro'],
            required: true
        },
        color: {
            type: String,
            default: "Negro"
        },
        disponible: {
            type: Boolean,
            default: true
        },

    },
    {
        timestamps: true //fechas de creacion y modificacion automaticas
    }
)

const ModelCelular = mongoose.model("celulares", celularSchema)
module.exports = ModelCelular; 