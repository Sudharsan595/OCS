import React, { useState } from "react";
import axios from "axios";
function DeleteDoctor() {
  const [doctorID, setDoctorId] = useState("");

    
  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      axios
        .delete(`http://localhost:8056/admin/deleteDoctor/` + doctorID)
        .then((res) => alert("Data is Deleted"));
      console.log("Doctor Deleted successfully..." + doctorID);
    }
  };
  

  return (
    <div className="ww" style={{backgroundImage:'url("https://plus.unsplash.com/premium_photo-1663013464645-01509b3cb5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
    backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
    <div className="sundar">
    <div className="delete-doctor-container">
      <h1 style={{textAlign:'center'}}><b>DeleteDoctor</b></h1>
      <label style={{display:'flex',justifyContent:'center',marginTop:'200px'}}>
       <h4><b>Enter Doctor ID:</b></h4>
        <input
          type="text"
          value={doctorID}
          onChange={(e) => setDoctorId(e.target.value)}
        />
      </label><br></br>
      <button onClick={handleDelete} style={{marginLeft:'700px'}}>Delete</button>
    </div>
    </div>
    </div>
  );
}

export default DeleteDoctor;
