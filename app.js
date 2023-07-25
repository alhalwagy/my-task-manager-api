const express = require('express');

const taskRouter = require('./routes/taskRoutes');

app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', taskRouter);

module.exports = app;
