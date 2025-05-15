import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='nav'>
      <div className="nav-logo">Ev-olution</div>

    
      <button className='nav-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; 
      </button>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        
        <li className='nav-contact'>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
