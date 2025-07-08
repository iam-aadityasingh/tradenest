import '../../index.css';
import { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import navbar_toggler from '../../assets/Navbar/navbar-toggler.png';
import logo_white from '../../assets/Navbar/logo-white.png';
import profile from '../../assets/Navbar/profile.png';

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="sticky top-0 z-50">
      <Suspense fallback={<div><big><i>Loading navbar...</i></big></div>}>
        <div className="navbar h-14 bg-gray-400 flex items-center justify-between px-4">
          <div className="logo">
            <img src={logo_white} alt="logo" className="h-12 w-12" />
          </div>
          <div className="links hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="navbar_toggler md:hidden">
            <input
              type="checkbox"
              className="navbar-toggler hidden"
              id="navbar-toggler"
              checked={isToggled}
              onChange={handleToggle}
              aria-expanded={isToggled}
            />
            <label htmlFor="navbar-toggler" className="cursor-pointer">
              <img
                src={navbar_toggler}
                alt="toggle menu"
                className="h-8 w-8 transform transition duration-150 ease-in-out hover:rotate-45"
              />
            </label>
          </div>
          <div className="user-actions hidden md:flex items-center space-x-4">
            <img src={profile} alt="profile" className="h-8 w-8 rounded-full" />
            <Link to="/login">
              {/* <Button text="Login" /> */}
            </Link>
          </div>
        </div>

        {/* Side Navbar for Mobile */}
        <div
          className={`sidebar md:hidden transition-[left] duration-500 ease-in-out absolute top-14 w-[250px] bg-gray-400 z-40
          ${isToggled ? 'left-0' : '-left-[250px]'}`}
          style={{ height: 'calc(100vh - 56px)' }}
        >
          <Link to="/" className="side-link"><span className='side-link-text'>Home</span></Link>
          <Link to="/about" className="side-link"><span className='side-link-text'>About</span></Link>
          <Link to="/contact" className="side-link"><span className='side-link-text'>Contact</span></Link>
          <Link to="/login" className="side-link border-b-2"><span className='side-link-text'>Login</span></Link>
        </div>
      </Suspense>
    </div>
  );
}

