
const express = require("express");
const cors = require("cors")

//const { query } = require("./config/db.config");
const dbConn = require("./config/db.config");

//create express application

const app = express()
app.use(express.urlencoded());
app.use(express.json());
app.use(cors())

//port setup
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{

    res.send("Hello Demo app here")
})

const studentRoutes = require('./src/router/student.route') 
app.use('/api/students', studentRoutes)

//const getOne = require('./src/router/getone.route') 
//app.use('/api/v1/employees/:id', getOne)

//get an employee
// app.get('/api/v1/students/:id', (req,res)=>{
//     dbConn.query('SELECT * FROM students where id=?',[req.params.id],(err,rows,fields)=>{
//         if(!err)
//         res.send(rows)
//         else
//         console.log(err)
//     })
// })

//add an employee to database
// app.post('/api/v1/students',(req,res)=>{
//     console.log(req.body);

//     // sql query 

//     let sql = `INSERT INTO students (id,first_name,last_name,city,dob,phone) VALUES(
//         '${req.body.id}','${req.body.first_name}','${req.body.last_name}',
//         '${req.body.city}','${req.body.dob}','${req.body.phone}')`;
//     // run query 
//     dbConn.query(sql,(err,result)=>{
//             if(err) throw err;
//             res.send('data inserted');
//     });        

// });

//delete an employee
// app.delete('/api/v1/students/:id', (req,res)=>{
//     dbConn.query(`DELETE FROM students WHERE id=?`,[req.params.id],(err,rows,fields)=>{
//         if(!err)
//         res.send("Deleted")
//         else
//         console.log(err)
//     })
// });


app.listen(port,()=>{
    console.log(`App is listening portttt ${port}`)
});


