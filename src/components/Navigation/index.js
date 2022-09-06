import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(props) {

  return (
    <header className="flex-row px-1">
      <h2>
        <Link data-testid="link" to="/">
          Shaun's Workshop
        </Link>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link data-testid="about" to="/">
              About me
            </Link>
          </li>
          <li className="mx-2">
            <Link data-testid="portfolio" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="mx-2">
            <Link data-testid="resume" to="/resume">
              Resume
            </Link>
          </li>
          <li className="mx-2">
            <Link data-testid="contact" to="/contact">
              Contact
              </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
