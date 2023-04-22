import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateDoctor() {
  const [doctorID, setDoctorID] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState('');
  const [street, setStreet] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailID, setEmailID] = useState('');
  const [obj, setObj] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setObj({
      "doctorID": doctorID,
      "doctorName": doctorName,
      "dateOfBirth": dateOfBirth,
      "dateOfJoining": dateOfJoining,
      "gender": gender,
      "qualification": qualification,
      "specialization": specialization,
      "yearOfExperience": yearOfExperience,
      "street": street,
      "location": location,
      "city": city,
      "state": state,
      "pincode": pincode,
      "contactNumber": contactNumber,
      "emailID": emailID
    })
  }

  useEffect(() => {
    axios.put('http://localhost:8056/admin/updateDoctor/$', obj)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [obj]);

  return (
    <div className='updatedoctor'>   
       <div  style={{width:'40%'}}>
      <h1>UpdateDoctor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctorID">Doctor ID:</label>
          <input type="text" className="form-control" id="doctorID" value={doctorID} onChange={(e) => { setDoctorID(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name:</label>
          <input type="text" className="form-control" id="doctorName" value={doctorName} onChange={(e) => { setDoctorName(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoining">Date of Joining:</label>
          <input type="date" className="form-control" id="dateOfJoining" value={dateOfJoining} onChange={(e) => { setDateOfJoining(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" className="form-control" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" className="form-control" id="qualification" value={qualification} onChange={(e) => { setQualification(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <input type="text" className="form-control" id="specialization" value={specialization} onChange={(e) => { setSpecialization(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfExperience">Year of Experience:</label>
          <input type="number" className="form-control" id="yearOfExperience" value={yearOfExperience} onChange={(e) => { setYearOfExperience(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input type="text" className="form-control" id="street" value={street} onChange={(e) => { setStreet(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" className="form-control" id="location" value={location} onChange={(e) => { setLocation(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" className="form-control" id="city" value={city} onChange={(e) => { setCity(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" className="form-control" id="state" value={state} onChange={(e) => { setState(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" className="form-control" id="pincode" value={pincode} onChange={(e) => { setPincode(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" className="form-control" id="contactNumber" value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />
        </div>
        <div className="form-group">
          <label htmlFor="emailID">Email ID:</label>
          <input type="email" className="form-control" id="emailID" value={emailID} onChange={(e) => { setEmailID(e.target.value) }} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>

  );
}
export default UpdateDoctor;





