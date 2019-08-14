const moongose = require('mongoose');
const Schema = moongose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = moongose.model('tasks', TaskSchema);