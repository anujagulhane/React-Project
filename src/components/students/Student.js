import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Student() {
    const [student, setStudent] = useState({
        first_name:"",
        last_name:"",
        city:"",
        dob:"",
        phone:""

    });
      const { id } = useParams();
      useEffect(() => {
        loadStudent();
      }, []);

      const loadStudent = async () => {
        const res = await axios.get(`http://localhost:5000/api/students/${id}`);
        console.log(res)
        setStudent(res.data);
      };
      return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/">
            back to Home
          </Link>
          <h1 className="display-4">Student Id: {id}</h1>
          
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">First Name: {student.first_name}</li>
            <li className="list-group-item">Last Name: {student.last_name}</li>
            <li className="list-group-item">City: {student.city}</li>
            <li className="list-group-item">Date of Birth: {student.dob}</li>
            <li className="list-group-item">Phone: {student.phone}</li>
          </ul>
        </div>
      );
    };
    

export default Student