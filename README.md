# Gestor de Celulares API

API REST para gestionar celulares con Node.js, Express y MongoDB. 
La idea de este proyecto es poder guardar celulares especificando todas sus características. 

## Endpoints de negocio: 
Además de los endpoints básicos para crear, leer, actualizar y eliminar celulares, este proyecto incluye endpoints especiales que permiten realizar búsquedas más específicas y útiles para el usuario, como por ejemplo:

Buscar celulares por marca:
GET /celulares/buscarPorMarca?marca=Samsung
Permite obtener todos los celulares que coincidan con la marca especificada, sin importar mayúsculas o minúsculas.

Buscar celulares por precio máximo:
GET /celulares/precio?precioMax=500
Devuelve todos los celulares cuyo precio sea menor o igual al valor indicado, facilitando encontrar opciones económicas.