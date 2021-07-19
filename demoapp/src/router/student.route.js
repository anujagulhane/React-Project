
const express = require("express")

const router = express.Router();

const studentController = require('../controller/student.controller')

router.get("/",studentController.getStudentList)

router.get("/:id",studentController.getStudentById)

router.post("/",studentController.createNewStudent)

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;
