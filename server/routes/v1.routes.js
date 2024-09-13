const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');

const authController = require('../controllers/auth.controllers');
const userController = require('../controllers/user.controllers');
const examController = require('../controllers/exam.controllers');


//Auth routes
router.post('/auth/login', authController.login);
router.post('/auth/signup', authController.signup);
router.post('/auth/logout', );

//User routes
router.get('/user/profile', authentication, userController.getUserProfile);

//Exam routes
router.post('/exam/generate', authentication, examController.generateQuestion);
router.post('/exam/genrateFeedback', authentication, examController.generateFeedback);
router.post('/exam/store', authentication, examController.storeExam);
router.get('/exam/getexams', authentication, examController.getExamByUser);


module.exports = router;