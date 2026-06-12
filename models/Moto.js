const mongoose = require("../db");

const MotoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    marca: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        enum: ["Baja", "Media", "Alta"],
        required: true
    },

    cilindraje: {
        type: Number,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    descripcion: {
        type: String
    }

}, {
    collection: "catalogo_motos"
});

module.exports = mongoose.model("Moto", MotoSchema);