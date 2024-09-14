const { generateQuestion, generateFeedback } = require('../services/gemini.services');
const Exam = require('../models/exam.models');
const mongoose = require('mongoose');

exports.generateQuestion = async (req, res) => {
    const { topic, level, numberOfQuestions } = req.body;
    try {
        const questions = await generateQuestion(topic, level, numberOfQuestions);
        res.status(200).json(questions);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

exports.generateFeedback = async (req, res) => {
    let data = req.body;
    data = JSON.stringify(data);
    try {
        const feedback = await generateFeedback(data);
        res.status(200).json(feedback);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

exports.storeExam = async (req, res) => {
    const { data } = req.body;
    const userId = req.userId;
    try {
        const totalMarks = data.feedback_of_questions.length*10;
        const obtainedMarks = data.feedback_of_questions.reduce((acc, item) => acc + item.marks, 0);
        const percentage = (obtainedMarks / totalMarks) * 100;
        const status = percentage >= 60 ? 'Pass' : 'Fail';
        const examData = {
            user: new mongoose.Types.ObjectId(userId),
            name: data.result.examName + ' - ' + new Date().toLocaleString(),
            questions: data.feedback_of_questions.map(item => ({
                number: item.number,
                question: item.question,
            })),
            answers: data.feedback_of_questions.map(item => ({
                number: item.number,
                answer: item.answer,
            })),
            area_of_improvement: data.feedback_of_questions.map(item => ({
                number: item.number,
                area_of_improvement: item.area_of_improvement,
            })),
            result: {
                totalMarks: totalMarks,
                obtainedMarks: obtainedMarks,
                percentage: percentage,
                status: status,
                overallFeedback: data.result.overallFeedback
            }
        }
        const exam = new Exam(examData);
        await exam.save();
        res.status(201).json(exam);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

exports.getExamByUser = async (req, res) => {
    const userId = req.userId;
    try {
        const exams = await Exam.find({ user: userId });
        res.status(200).json(exams);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

exports.getExamById = async (req, res) => {
    const { id } = req.params;
    try {
        const exam = await Exam.findById(id);
        res.status(200).json(exam);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}