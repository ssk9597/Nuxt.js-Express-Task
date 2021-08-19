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
};

module.exports = taskController;
