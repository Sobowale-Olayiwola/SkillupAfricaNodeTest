const config = require('../config/config')
const { v4: uuidv4 } = require('uuid'),
      Model = require('../models/sequelize');

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   */
  static async createTodo(description) {
    let newTodo = Model.Todo.create({
      uniqueid: uuidv4(),
      description,
      iscompleted: false,
    });

    return newTodo;
  }
  /**
   * @param {string} id Unique id of a todo in the database to be read
   */
  static async updateTodo(todoId, requestBody) {
    return Model.Todo.update({ description: requestBody}, {where: {uniqueid: todoId}})
    // const project = await Model.Todo.findOne({ where: { uniqueid: todoId } });
    // project.description = requestBody;
    // const savedInstance = await project.save()
    // return savedInstance;  
  }
  /**
   * @param {none} List Returns back a list of Todos
   */
  static async getAllTodos() {
    const allTodos = await Model.Todo.findAll();
    return allTodos
  }
  /**
   * 
   * @param {string} todoId Unique id of todo to be deleted
   * @returns 
   */
  static async deleteTodoById(todoId) {
    const todo = await Model.Todo.findOne({ where: { uniqueid: todoId } });

    await Model.Todo.destroy({
      where: {
        uniqueid: todoId
      }
    });
    return todo;
  }
};
