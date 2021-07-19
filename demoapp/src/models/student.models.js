
var dbConn = require("../../config/db.config");

var Student =function (student)  {
    this.id= student.id;
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.city = student.city;
    this.dob = student.dob;
    this.phone = student.phone;
  
}

// get all employees

Student.getAllStudents = (result) => {
    
    dbConn.query('SELECT * FROM students', (err, res) => {
        if(err){
            console.log("Error while fetching the students", err)
            result(null, err)
        }else{
            console.log("Students fetched successfully");
            result(null, res);
        }
    })
}

//get one employee

Student.getStudentById = (id, reslt) => {

    dbConn.query('SELECT * FROM students where id=?',id,(err,res)=>{
                if(!err)
                reslt(null,res)
                else
                console.log(err)

}
)
}

//add new employee

Student.creatingStudent = (studentData, result) => {
    dbConn.query(`INSERT INTO students SET?`, studentData, (err, res) => {
        if(err){
            console.log("Error while creating student", err)
            result(null, err)
        } else {
            console.log("student inserted")
            result(null, res)
        }
    } )
}

Student.updateStudent = (id, studentData, results) => {
    dbConn.query( "UPDATE students SET first_name=?, last_name=?, city=?, dob=?, phone=? WHERE id = ?",
     [studentData.first_name, studentData.last_name, studentData.city, studentData.dob, studentData.phone, id],
        (err, res) => {
            if (err) {
                console.log("Error while updating student", err)
                results(null, err)
            } else {
                console.log("student updated")
                results(null, res)
            }
        })
}

//Delete Student
Student.deleteStudent = (id, result) => {
    dbConn.query(`DELETE FROM students WHERE id=?`, [id], (err, res) => {
        if (err) {
            console.log("Error while deleting Student", err)
            result(null, err)
        } else {
            console.log("Student deleted")
            result(null, res)
        }
    })
}



module.exports = Student;