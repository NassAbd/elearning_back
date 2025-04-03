// routes for the quizzes, handled by the quizController
const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quizController');

// get all quizzes
router.get('/', quizController.getAllQuizzes);

// get a single quiz
router.get('/:id', quizController.getQuizById);

// create a new quiz
router.post('/', quizController.createQuiz);

// update a quiz
router.put('/:id', quizController.updateQuiz);

// delete a quiz
router.delete('/:id', quizController.deleteQuiz);

module.exports = router;