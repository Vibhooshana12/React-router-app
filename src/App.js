import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllCourses from './RouterPages/AllCourses';
import CyberSecurity from './RouterPages/CyberSecurity';
import DataScience from './RouterPages/DataScience';
import FullStack from './RouterPages/FullStack';
import Career from './RouterPages/Career';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllCourses/>} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

