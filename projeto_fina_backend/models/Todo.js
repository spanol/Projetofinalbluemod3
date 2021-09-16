  
const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: Number, required: true },
  status: { type: Number, required: true },
  dataFinal: { type: Date },
  dataInicial: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoModel);

module.exports = Todo;