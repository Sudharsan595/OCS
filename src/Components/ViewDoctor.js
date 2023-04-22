import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom"; 

function ViewDoctor() {
  const [doctors, setDoctors] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8056/admin/selectAll")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // function handleUpdateDoctor() {
  //   navigate('/updateDoctor');
  // }
  // function handleDeleteDoctor() {
  //   navigate('/deleteDoctor');
  // } 

  return (
    <div style={{backgroundImage:'url("https://plus.unsplash.com/premium_photo-1663013464645-01509b3cb5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
    backgroundRepeat:'no-repeat',backgroundSize:'cover'
    }}>
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h2>View Doctors</h2>
                    
        {/* <button className="btn btn-primary" onClick={() => navigate("/createdoctor")}>
          Create Doctor
        </button> */}
      </div>
      <table className="table" border="4">
        <thead className="thead-light">
          <tr>
            <th>DoctorID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Specialization</th>
            <th>Years of Experience</th>
            <th>Address</th>
            <th>Contact Information</th>
            
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorID}>
              <td>{doctor.doctorID}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.dateOfBirth}</td>
              <td>{doctor.dateOfJoining}</td>
              <td>{doctor.gender}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.yearsOfExperience}</td>
              <td>{`${doctor.street}, ${doctor.location}, ${doctor.city}, ${doctor.state} - ${doctor.pincode}`}</td>
              <td>{`${doctor.contactNumber}, ${doctor.email}`}</td>
              
                 
                 </tr>
                 ))}
                 </tbody>
                 </table>
                 </div>
                

                 </div>
                 );
                 }
                 
                 export default ViewDoctor;
                 
                 
