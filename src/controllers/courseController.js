// to handle the requests related to the course
const Course = require('../models/Course');
const Quiz = require('../models/Quiz');

// retrieve all courses
exports.getAllCours = async (req, res) => {
    try {
      const course = await Course.find();
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// retrieve a specific course by ID
exports.getCoursById = async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// create a new course
  exports.createCours = async (req, res) => {
    const course = new Course(req.body);

    try {
      const newCourse = await course.save();
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// update a course by ID
exports.updateCours = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(course);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete a course by ID
  exports.deleteCours = async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) return res.status(404).json({ message: 'Course not found.' });
      // Also delete all quizzes associated with the course
      await Quiz.deleteMany({ courseId: req.params.id });
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };