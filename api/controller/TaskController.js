// model
const db = require('../models');

const taskController = {
  async index(req, res) {
    const results = await db.Task.findAll();
    res.json(results);
  },

  async store(req, res) {
    const content = req.body.content;
    const status = req.body.status;
    await db.Task.create({
      content: content,
      status: status,
    });
  },

  async delete(req, res) {
    const id = req.body.id;
    await db.Task.destroy({
      where: { id: id },
    });
  },

  async update(req, res) {
    const id = req.body.id;
    const status = req.body.status;
    await db.Task.update({ status: !status }, { where: { id: id } });
  },
};

module.exports = taskController;
