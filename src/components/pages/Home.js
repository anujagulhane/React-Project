import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
        console.log("Inside home use effect")
    }, []);

    const loadStudents = async () => {
        console.log("inside load")
        const result = await axios.get("http://localhost:5000/api/students")
        setStudents(result.data.reverse())
        console.log(students)
        console.log("students loaded")

    }
    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        loadStudents()
      }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>

                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map( (student, index)=>(
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.city}</td>
                                    <td>{student.phone}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/students/${student.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/students/edit/${student.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
