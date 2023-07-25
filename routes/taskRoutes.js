const express = require('express');

const tasksController = require('./../controller/tasksController');

const router = express.Router();

router
  .route('/')
  .get(tasksController.getMyTasks)
  .post(tasksController.createTask);

router
  .route('/:id')
  .get(tasksController.getTask)
  .delete(tasksController.deleteTask)
  .patch(tasksController.updateTask);

module.exports = router;
