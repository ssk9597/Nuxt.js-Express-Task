// model
const db = require('../models');

const taskController = {
  async index(req, res) {
    const results = await db.Task.findAll();
    res.json(results);
  },
};

module.exports = taskController;
