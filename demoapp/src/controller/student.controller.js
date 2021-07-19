const Student = require('../models/student.models')
const StudentModel = require('../models/student.models')


exports.getStudentList = (req,res)=>{
    
    console.log("Here is all students list");
    StudentModel.getAllStudents((err, students) => {

        console.log("students are here")
        res.send(students)
    })
}

exports.getStudentById = (req,res)=>{
    
    console.log("Here is one student");
    StudentModel.getStudentById(req.params.id, (err, students) => {

      console.log("student is here")
        res.send(students)
    })
}

exports.createNewStudent = (req, res) => {
    console.log("Create New student", req.body )
    const studentReqData = new StudentModel(req.body);

    //check null
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill all the fields"})
    }else{
        console.log("success, valid data")
        //return; 
       StudentModel.creatingStudent(studentReqData, (err, student) => {
            if(err)
                res.send(err)
                res.json({ status: true, message: "Created Successfully", data:student })
        })
    }
} 

// Update student
exports.updateStudent = (req, res) => {
    console.log("Update Student", req.body )
    const studentReqData = new StudentModel(req.body);

    //check null
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill all the fields"})
    }else{
        console.log("success, valid data")
        //return; 
        StudentModel.updateStudent( req.params.id , studentReqData, (err, student) => {
            if(err)
                res.send(err)
                res.json({ status: true, message: "Student Updated Successfully", data:student })
        })
    }
}

// Delete student By Id
exports.deleteStudent = (req, res) => {
    StudentModel.deleteStudent( req.params.id, (err, student) => {
        if(err)
        res.send(err)
        res.json({ success: true, message: "Student delete successfully...!"})
    })
} 

