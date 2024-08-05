import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'

function NavBar() {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  }; 
return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand" to="/"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/8336/8336508.png" alt="Icon" style={{ width: '45px', height: '45px' }} />Blogs</Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded={!isCollapsed}
    aria-label="Toggle navigation"
    onClick={toggleNavbar}
    >
      <i className={`fa ${isCollapsed ? 'fa-bars' : 'fa-times'}`} aria-hidden="true"></i>
  </button>
  <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link text-white" to="/">All</Link>                    
        </li>

        <li class="nav-item">
            <Link className="nav-link text-white" to="/fullstack">Full Stack Development</Link>
        </li>

        <li class="nav-item">
            <Link className="nav-link text-white " to="/datascience">Data Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white " to="/cybersecurity">Cyber Security</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link text-white " to="/career">Career</Link>
        </li>
      </ul>
  </div>
</nav>
);
}
export default NavBar;
