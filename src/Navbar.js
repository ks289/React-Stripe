import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const centre = (tempBtn.left + tempBtn.right) / 2;
    // lifting 3px up to allow the submenu to disappear when moving over different buttons
    const bottom = tempBtn.bottom - 3; 
    openSubmenu(page, {centre, bottom});
  }

  const handleSubmenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="nav-links">
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn single-btn">Sign in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
