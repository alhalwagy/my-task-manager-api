const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Task must have a String to write'],
    maxlength: [40, 'Task must have below 40 character'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Tasks = mongoose.model('Tasks', tasksSchema);
module.exports = Tasks;
