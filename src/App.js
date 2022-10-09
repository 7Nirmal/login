import logo from './logo.svg';
import './App.css';
import Loginform from './Loginform';
import{Routes,Route} from "react-router-dom";
import Signup from './Signup';
import Booking from './Booking';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Loginform/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/booking" element={<Booking/>}/>

    </Routes>
    </>
   
  );
}

export default App;
