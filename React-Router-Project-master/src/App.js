import './css/App.css';
import './css/index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Navigate replace to="/home" />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
