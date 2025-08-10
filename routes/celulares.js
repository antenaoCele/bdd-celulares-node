const express = require('express');
const router = express.Router();
const ModelCelular = require('../models/celularmodel');

//obtener todos los celulares 
router.get('/celulares', async (req, res) => {
    try {
        const celulares = await ModelCelular.find();
        res.status(200).send(celulares);
    } catch (error) {
        res.status(404).send({ mensaje: 'Error al obtener los celulares', error });
    }
})

//(:------------------------ENDPOITS DE NEGOCIO----------------------:)
//Obtengo celulares por su marca:)
router.get('/celulares/buscarPorMarca', async (req, res) => {
    try {
        const marca = req.query.marca;
        if (!marca) {
            return res.status(400).send({ mensaje: 'Debe especificar una marca' });
        }
        const celulares = await ModelCelular.find({ marca: new RegExp(marca, 'i') });
        if (celulares.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron celulares para esa marca' });
        }
        res.status(200).send(celulares);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar celulares por marca', error });
    }
});

// Obtengo celulares con precio menor o igual a un valor dado
router.get('/celulares/precio', async (req, res) => {
    try {
        const precioMax = parseFloat(req.query.precioMax);

        if (isNaN(precioMax)) {
            return res.status(400).send({ mensaje: 'Debe enviar un precio válido' });
        }

        // Buscar celulares con precio menor o igual al valor indicado
        const celulares = await ModelCelular.find({ precio: { $lte: precioMax } });

        if (celulares.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron celulares con ese rango de precio' });
        }

        res.status(200).send(celulares);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar celulares por precio', error });
    }
});

//(:----------------------------------------------------------------------:)

//busqueda por id
router.get("/celulares/:id", async (req, res) => {
    try {
        const celular = await ModelCelular.findById(req.params.id);

        if (!celular) {
            return res.status(404).send({ mensaje: 'Celular no encontrado', error });
        }

        return res.status(200).send(celular)

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el celular', error });
    }
});

//Creamos un nuevo celular 
router.post('/celulares', async (req, res) => {
    const body = req.body;
    try {
        const nuevoCelular = await ModelCelular.create(body);
        res.status(201).send(nuevoCelular);
    } catch (error) {
        res.status(400).send(error);
    }
})

//actualizamos un celu por id
router.put("/celulares/:id", async (req, res) => {
    try {
        let celularActualizado = await ModelCelular.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!celularActualizado) {
            return res.status(404).send({ mensaje: "Celular no encontrado" });
        }

        res.status(201).send(celularActualizado);
    } catch (error) {
        res.status(400).send({ mensaje: "Error al actualizar el celular", error })
    }
});

//eliminamos un celu por su id 
router.delete('/celulares/:id', async (req, res) => {
    try {
        const celularEliminado = await ModelCelular.findByIdAndDelete(req.params.id);

        if (!celularEliminado) {
            return res.status(404).send({ mensaje: "Celular no encontrado" });
        }

        res.status(200).send({ mensaje: "Celular eliminado correctamente" });

    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el celular", error })
    }
})



module.exports = router; 