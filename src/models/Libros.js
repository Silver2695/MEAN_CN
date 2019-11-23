const mongoose = require('mongoose');
const { Schema } = mongoose;

const libroSchema = new Schema({
  Id: {
    type: int,
    required: true
  },
  Nombre_Libro: {
    type: String,
    required: true
  },
  Editorial: {
    type: String,
    required: true
  },
  Autor: {
    type: String,
    required: true
  },
  Genero:{
      type: String,
      required: true
  },
  Pais:{
      type: String,
      required: true
  },
  Num_Paginas:{
      type: int,
      required: true
  },
  Fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Libros', NoteSchema);