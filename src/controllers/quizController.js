// to handle the requests related to the quiz
const Quiz = require('../models/Quiz');

// retrieve all quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
      const quiz = await Quiz.find();
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// retrieve a specific quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ courseId: req.params.id });
        if (!quizzes.length) return res.status(404).json({ message: "Aucun quiz trouvé pour ce cours" });
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  
// create a new quiz
    exports.createQuiz = async (req, res) => {
        const quiz = new Quiz(req.body);
    
        try {
        const newQuiz = await quiz.save();
        res.status(201).json(newQuiz);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    };
    
// update a quiz by ID
exports.updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(quiz);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// delete a quiz by ID
exports.deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found.' });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};