import React, { useState } from "react";
import axios from 'axios'

const ResigsterProfile = () => {
  const [userID, setuserID] = useState();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [gender, setGender] = useState('');
  const [street, setStreet] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [emailID, setEmailID] = useState('');
  const [state,setState]=useState('')
    
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userID+""+firstName+" "+ lastName+" "+dateofBirth+" "+gender+street+""+location+""+city+""+state+""+pincode+""+mobileNo+""+emailID);
    const obj={userID:userID,firstName:firstName,lastName:lastName,dateofBrith:dateofBirth,gender:gender,street:street,location:location,city:city,state:state,pincode:pincode,mobileNo:mobileNo,emailID:emailID}
    console.log(obj)
    axios.post('http://localhost:8056/profile/addProfile',obj).then(
      alert('Patient added successfully')
    ).catch((e)=>console.log(e))
  } 

  return (
    <div style={{backgroundImage:'url("https://t4.ftcdn.net/jpg/05/85/85/51/240_F_585855190_2HhrOXgv7mlRlzWMI1WouXodpdBJZp3C.jpg")',
    backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',
    height:'100%',
    backgroundSize:'cover'
    }}>
    <div className="container" style={{marginTop: "20px",backgroundColor:'transparent'}}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card">
            <h5 className="card-header text-center">Register Profile</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userID">UserID:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userID"
                    value={userID}
                    onChange={(e)=>{setuserID(e.target.value)}}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>{setfirstName(e.target.value)}}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={(e)=>{setlastName(e.target.value)}}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                    value={dateofBirth}
                    onChange={(e)=>{setDateofBirth(e.target.value)}}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e)=>{setGender(e.target.value)}}
                    required
                  >
                    <option value="">--Select Gender--</option>
                    <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="street">Street:</label>
              <input
                type="text"
                className="form-control"
                name="street"
                value={street}
                onChange={(e)=>{setStreet(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={location}
                onChange={(e)=>{setLocation(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={city}
                onChange={(e)=>{setCity(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={state}
                onChange={(e)=>{setState(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode:</label>
              <input
                type="number"
                className="form-control"
                name="pincode"
                value={pincode}
                onChange={(e)=>{setPincode(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNo">Mobile Number:</label>
              <input
                type="text"
                className="form-control"
                name="mobileNo"
                value={mobileNo}
                onChange={(e)=>{setmobileNo(e.target.value)}}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailID">Email ID:</label>
              <input
                type="email"
                className="form-control"
                name="emailID"
                value={emailID}
                onChange={(e)=>{setEmailID(e.target.value)}}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
};

export default ResigsterProfile;
