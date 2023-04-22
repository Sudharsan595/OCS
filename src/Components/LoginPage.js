import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    switch (type) {
      case 'admin':
        if (username === 'AD001' && password === 'AD001') {
          navigate('/createDoctor');
        } else if (username === 'AD002' && password === 'AD002') {
          navigate('/viewDoctor'); 
        } else if (username === 'AD003' && password === 'AD003') {
          navigate('/updateDoctor'); 
        } else if (username === 'AD004' && password === 'AD004') {
          navigate('/deleteDoctor'); 
        } else {
          alert('Incorrect username or password');
        }
        break;

      case 'patient':
        if (username === 'US001' && password === 'US001') {
          navigate('/registerProfile');
        } else {
          alert('Incorrect username or password');
        }
        break;

      case 'reporter':
        if (username === 'RE01' && password === 'RE01') {
          navigate('/reporter'); 
        } else {
          alert('Incorrect username or password');
        }
        break;

      default:
        alert('Please select a user type');
        break;
    }
  };

  return (
    <div  style={{backgroundImage:'url("https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=740&t=st=1682139053~exp=1682139653~hmac=4a49f746353ca9c7085e1741ad1466d0c9aebf696bb1c02981be960d3a674528")',
    backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',height:'100vh',width:'100%',backgroundPosition:'center',backgroundSize:'cover'
    }} >
    <div className="login-page" style={{width:'300px'}} >
      <div className="login-f-container">
        <Form onSubmit={handleSubmit}>
          <div className="vehicle-type-container">
            <div><h4>
              <Form.Check
                type="radio"
                label="Admin"
                id="admin"
                name="Type"
                value="admin"
                checked={type === 'admin'}
                onChange={() => setType('admin')}
              /></h4>
            </div>
            <div><h4>
              <Form.Check
                type="radio"
                label="Patient"
                id="patient"
                name="Type"
                value="patient"
                checked={type === 'patient'}
                onChange={() => setType('patient')}
              /></h4>
            </div>
            <div><h4>
              <Form.Check
                type="radio"
                label="Reporter"
                id="reporter"
                name="Type"
                value="reporter"
                checked={type === 'reporter'}
                onChange={() => setType('reporter')}
              /></h4>
            </div>
          </div>
          <CSSTransition classNames="input-container" timeout={500}>
            <div className="input-container">
              <Form.Label><h4>Username:</h4></Form.Label>
              <Form.Control type="text" id="username" name="username" />
            </div>
          </CSSTransition>
          <br></br>
          <CSSTransition classNames="input-container" timeout={900}>
          <div className="input-container">
        <Form.Label><h4>Password:</h4></Form.Label>
        <Form.Control type="password" id="password" name="password" />
      </div>
      </CSSTransition>
      <br></br>
      <Button type="submit" variant="primary" size="lg">
        <h3>Login</h3>
      </Button>
    </Form>
  </div>
</div>
</div>
);
}

export default LoginPage;