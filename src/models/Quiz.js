// Quiz model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: String,
    propositions: [String],
    answer: String,
    courseId: { type: Schema.Types.ObjectId, ref: 'Course' } // link to Course model
});

module.exports = mongoose.model('Quiz', quizSchema);