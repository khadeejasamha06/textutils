import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

  const toggleMode = () => {
    if (props.mode === 'light') {
      props.setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'React App - Dark Mode';
    } else {
      props.setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'React App - Light Mode';
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li> */}

          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About'
};