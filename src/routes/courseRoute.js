// routes for the course, handled by the courseController
const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

// get all courses
router.get('/', courseController.getAllCours);

// get a single course
router.get('/:id', courseController.getCoursById);

// create a new course
router.post('/', courseController.createCours);

// update a course
router.put('/:id', courseController.updateCours);

// delete a course
router.delete('/:id', courseController.deleteCours);

module.exports = router;
