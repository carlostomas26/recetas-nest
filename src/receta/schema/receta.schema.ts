import * as mongoose from 'mongoose';

export const RecetaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 5
    },
    comensales: {
        type: Number,
        required: true,
        min: 1
    },
    preparacion: {
        type: Number,
        required: true,
        min: 1
    },
    coccion: {
        type: Number,
        rquired: true,
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    elementos: [{
        ingrediente: {
            type: String,
            required: true,
            minlength: 3
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1
        },
        unidad: {
            type: String,
            required: true,
            minlength: 5
        }
    }]
});