// Course model, with title and content
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema);