const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', getHomepage);

router.get('/students', getAllStudents);

router.get('/students/:major', getAllStudentsByMajor);

module.exports = router;
