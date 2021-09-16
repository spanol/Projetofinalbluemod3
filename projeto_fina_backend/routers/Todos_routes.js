const express = require("express");
const Router = express.Router();
const Todo = require("../models/Todo");

Router.get("/", async (req, res) => {
  await Todo.find({})
    .sort({ "status": 1, "prioridade": 1 })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch(() => {
      res.status(501).send({ response: "Erro no servidor." });
    });
});

Router.get("/findid/:id", async (req, res) => {
  await Todo.findOne({ _id: req.params.id })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch(() => {
      res.status(404).send({ response: "Não foi possivel encontrar a tarefa." });
    });
});

Router.post("/", async (req, res) => {
  await Todo.create(req.body)
    .then(() => {
      res.status(201).send({ response: "Tarefa adicionada com sucesso." });
    })
    .catch(() => {
      res
        .status(400)
        .send({ response: "Há algo faltando." });
    });
});

Router.put("/:id", async (req, res) => {
  await Todo.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send({ response: "Tarefa atualizada com sucesso." });
    })
    .catch(() => {
      res.status(404).send({ response: "Não foi possivel encontrar a tarefa." });
    });
});

Router.delete("/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send({ response: "Tarefa deletada com sucesso." });
    })
    .catch(() => {
      res.status(404).send({ response: "Não foi possivel encontrar o ID." });
    });
});

module.exports = Router;