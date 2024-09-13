const { name } = require('ejs');
const mongoose = require('mongoose');

const ExamSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    area_of_improment: {
        type: Array,
        required: true
    },
    result: {
        totalMarks: {
            type: Number,
            required: true
        },
        obtainedMarks: {
            type: Number,
            required: true
        },
        percentage: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        overallFeedback: {
            type: String,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;