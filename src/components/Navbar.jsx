import React, { useState } from "react";

const Navbar = () => {
  const [showHireDropdown, setShowHireDropdown] = useState(false);

  const toggleHireDropdown = () => {
    setShowHireDropdown(!showHireDropdown);
  };

  // Platform links (replace with your actual profile links)
  const platformLinks = {
    upwork: "https://www.upwork.com/freelancers/~01c284d6cc0c3d3182",
    fiverr: "https://www.fiverr.com/parthsingal/buying?source=avatar_menu_profile",
    freelance: "https://www.freelancer.in/u/parths327"
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark hover-text-primary" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark hover-text-primary" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark hover-text-primary" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-dark hover-text-primary" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item ms-3 position-relative">
              <button 
                className="btn btn-primary px-4 py-2 fw-semibold shadow-sm rounded-pill transition d-flex align-items-center gap-2"
                onClick={toggleHireDropdown}
                aria-expanded={showHireDropdown}
                aria-label="Hire me options"
              >
                Hire Me
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="currentColor"
                  className={`transition-transform ${showHireDropdown ? 'rotate-180' : ''}`}
                >
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {showHireDropdown && (
                <div 
                  className="dropdown-menu show position-absolute end-0 mt-2 shadow rounded-3 border-0 py-2"
                  style={{ minWidth: "200px" }}
                >
                  <h6 className="dropdown-header fw-semibold text-dark px-3 mb-1">
                    Hire me on
                  </h6>
                  <a 
                    href={platformLinks.upwork} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 hover-bg-primary-soft transition"
                  >
                    <img 
                      src="/upwork-logo.png" 
                      alt="Upwork" 
                      width="20" 
                      height="20"
                      className="rounded-1"
                    />
                    <span>Upwork</span>
                  </a>
                  <a 
                    href={platformLinks.fiverr} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 hover-bg-primary-soft transition"
                  >
                    <img 
                      src="/fiverr-logo.png" 
                      alt="Fiverr" 
                      width="20" 
                      height="20"
                      className="rounded-1"
                    />
                    <span>Fiverr</span>
                  </a>
                  <a 
                    href={platformLinks.freelance} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 hover-bg-primary-soft transition"
                  >
                    <img 
                      src="/freelance=logo.png" 
                      alt="Freelancer" 
                      width="20" 
                      height="20"
                      className="rounded-1"
                    />
                    <span>Freelancer</span>
                  </a>
                  <div className="dropdown-divider my-1"></div>
                  <a 
                    href="#contact" 
                    className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 hover-bg-primary-soft transition"
                    onClick={() => setShowHireDropdown(false)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>Direct Contact</span>
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .hover-text-primary:hover {
          color: #0d6efd !important;
        }
        .transition {
          transition: all 0.2s ease;
        }
        .rotate-180 {
          transform: rotate(180deg);
        }
        .hover-bg-primary-soft:hover {
          background-color: rgba(13, 110, 253, 0.1);
        }
        .dropdown-menu {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;