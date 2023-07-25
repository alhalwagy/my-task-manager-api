const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Tasks = require('../models/tasksModel');

exports.getMyTasks = catchAsync(async (req, res, next) => {
  const tasks = await Tasks.find({});
  res.status(200).json({ tasks });
});

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task) {
    return next(new AppError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(new AppError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});


exports.updateTask = catchAsync(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(new AppError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
