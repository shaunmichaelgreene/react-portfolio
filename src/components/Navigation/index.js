import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

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
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
