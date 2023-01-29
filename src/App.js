
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import ImageUpload from './components/ImageUpload';
import EditUser from './components/EditUser';



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/imageupload" element={<ImageUpload/>} />
      <Route path="/homePage/edituser" element={<EditUser/>} />
     </Routes>
    </div>
  );
}

export default App;
