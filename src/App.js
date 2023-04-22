import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateDoctor from './Components/UpdateDoctor';
import ViewDoctor from './Components/ViewDoctor';
import CreateDoctor from './Components/CreateDoctor';
import DeleteDoctor from './Components/DeleteDoctor';
import LoginPage from './Components/LoginPage';
import ResigsterProfile from './Components/RegisterProfile';
import Reporter from './Components/Reporter';
import Navbar from './Components/Navbar';


function App() {
  return (
    
<div>
  <Navbar/>
   <Routes>
   <Route exact path='/' element={<LoginPage/>}/>
    <Route path='/viewDoctor' element={<ViewDoctor/>}/>
    <Route path='/createDoctor' element={<CreateDoctor/>}/>
    <Route path='/updateDoctor' element={<UpdateDoctor/>}/>
    <Route path='/deleteDoctor' element={<DeleteDoctor/>}/>
    <Route path='/registerProfile' element={<ResigsterProfile/>}/>
    <Route path='/reporter' element={<Reporter/>}/>
  </Routes> 
</div>

  );
}

export default App;
