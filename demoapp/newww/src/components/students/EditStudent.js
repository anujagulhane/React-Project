import React ,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';

function EditStudent () {

    let history = useHistory();
    const { id } =  useParams();
    //alert(id);


    const [student, setStudent] = useState({
        first_name:"",
        last_name:"",
        city:"",
        dob:"",
        phone:""

    });
    const { first_name, last_name, city, dob, phone } = student;

    const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/students/${id}`, student)
        history.push("/");
      }
      useEffect(() => {
        loadStudents()
      }, [])


      const loadStudents = async () => {
        const result = await axios.get(`http://localhost:5000/api/students/${id}`)
        console.log(result.data)
        setStudent(result.data)
      }

    return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-1"> Edit Student</h2>
            <form onSubmit={ e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="form-control form-control-lg"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="form-control form-control-lg"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="form-control form-control-lg"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="Enter Your Date of Birth"
                  className="form-control form-control-lg"
                  name="dob"
                  value={dob}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="form-control form-control-lg"
                  name="phone"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className=" w-100 btn btn-primary bnt-block">
                Update Student
              </button>
            </form>
          </div>
        </div>
      );
}

export default EditStudent
