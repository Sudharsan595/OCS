import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './CreateDoctor.css'

function CreateDoctor() {
  const [doctor, setDoctor] = useState({
    
    doctorName: "",
    dateOfBirth: "",
    dateOfJoining: "",
    gender: "",
    qualification: "",
    specialization: "",
    yearsOfExperience: "",
    street: "",
    location: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value
    }));
  };
const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:8056/admin/addDoctor`,doctor).then((response) => {
      console.log(response.data);
      alert("Doctor is Successfully  Added......................................");
      nav("/createDoctor");
      
      // Redirect to doctor list page or show success message
    }).catch((error) => {
      console.log(error);
      // Show error message
    });
  };

  return (
    <div className="createdoctor" style={{backgroundColor:'GrayText'}}>
    <h1>Create Doctor</h1>
     
      <form onSubmit={handleSubmit} style={{width:'40%'}} >
      {/* <div className="form-group">
          <label htmlFor="doctorName">DoctorID:</label>
          <input type="text" className="form-control" id="doctorID" name="doctorID" value={doctor.doctorID} onChange={handleChange} />
        </div> */}
       
        <div className="form-group">
          <label htmlFor="doctorName"><b>DoctorName:</b></label>
          <input type="text" className="form-control" id="doctorName" name="doctorName" value={doctor.doctorName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth"><b>Date of Birth:</b></label>
          <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={doctor.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoining"><b>Date of Joining:</b></label>
          <input type="date" className="form-control" id="dateOfJoining" name="dateOfJoining" value={doctor.dateOfJoining} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender"><b>Gender:</b></label>
          <input type="text" className="form-control" id="gender" name="gender" value={doctor.gender} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="qualification"><b>Qualification:</b></label>
          <input type="text" className="form-control" id="qualification" name="qualification" value={doctor.qualification} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="specialization"><b>Specialization:</b></label>
          <input type="text" className="form-control" id="specialization" name="specialization" value={doctor.specialization} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="yearsOfExperience"><b>Years of Experience:</b></label>
          <input type="number" className="form-control" id="yearsOfExperience" name="yearsOfExperience" value={doctor.yearsOfExperience} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="street"><b>Street:</b></label>
          <input type="text" className="form-control" id="street" name="street" value={doctor.street} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location"><b>Location:</b></label>
          <input type="text" className="form-control" id="location" name="location" value={doctor.location} onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="city"><b>City:</b></label>
          <input type="text" className="form-control" id="city" name="city" value={doctor.city} onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="state"><b>State:</b></label>
          <input type="text" className="form-control" id="state" name="state" value={doctor.state} onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="pincode"><b>Pincode:</b></label>
          <input type="text" className="form-control" id="pincode" name="pincode" value={doctor.pincode} onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="contactNumber"><b>Contact Number:</b></label>
          <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={doctor.contactNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
          <label htmlFor="email"><b>Email:</b></label>
          <input type="email" className="form-control" id="email" name="email" value={doctor.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary"><b>Create</b></button>
          </form>
          </div>
        
          
          );
          }
          
          export default CreateDoctor;
          
          
          
          
          