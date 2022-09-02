import React from 'react';

function Navigation(props) {

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Shaun's Workshop
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="/">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="/resume">
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="/contact">
              Contact
              </a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
