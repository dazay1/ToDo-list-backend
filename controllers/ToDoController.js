const ToDoModel = require('../models/ToDoModel');

class Controller {
  async getTodo(req, res) {
    const toDo = await ToDoModel.find();
    res.send(toDo)
  }
  async saveTodo(req, res) {
    const { text } = req.body;
    ToDoModel.create({ text })
      .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
      })
  }
  async updateToDo(req, res) {
    const { _id, text } = req.body
    ToDoModel
      .findByIdAndUpdate(_id, { text })
      .then(() => res.send("Updated Successfully..."))
      .catch((err) => console.log(err))
  }
  async deleteToDo(req, res) {
    const { _id, text } = req.body
    ToDoModel
      .findByIdAndDelete(_id)
      .then(() => res.send("Deleted Successfully..."))
      .catch((err) => console.log(err))
  }
}
module.exports = new Controller()

