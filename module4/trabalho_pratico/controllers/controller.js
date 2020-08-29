import { db } from "../models/index.js";

const Account = db.bank;

const create = async (req, res) => {
  const { name, agencia, balance, conta } = req.body;
  const account = new Account({
    name,
    agencia,
    balance,
    conta,
  });

  try {
    const data = await account.save();

    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao salvar o Account " + error);
  }
};

const findAll = async (req, res) => {
  try {
    const body = req.body;
    const data = await Account.find(body);

    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao buscar todos os podcasts");
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Account.findById({ _id: id });

    if (!data) {
      res.send("Nao encontrato o Account id: " + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar o Account id: " + id + " " + error);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Account.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.send("Nao encontrato o Account id: " + id);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar o Account id: " + id + " " + error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Account.findByIdAndRemove({ _id: id });

    if (!data) {
      res.send("Nao encontrato o Account id: " + id);
    } else {
      res.send("Account excluido com sucesso");
    }
  } catch (error) {
    res.status(500).send("Erro ao excluir o Account id: " + id + " " + error);
  }
};

export default { create, findAll, findOne, update, remove };
