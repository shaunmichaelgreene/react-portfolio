import {React, useState} from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const [categories] = useState([ 
    {
      name: 'Front-End',
      description: 'Projects built with HTML, CSS, JavaScript, and APIs with a focus on front-end development',
    },
    { name: 'OOP-ORM-TDD', description: 'Projects built with a focus on Object-Oriented Programming, Object Relational Mapping, and Test-Driven Development' },
    { name: 'Back-End', description: 'Projects with a focus on back-end development, featuring SQL, NoSQL, MVC' },
    { name: 'Full-Stack', description: 'Full Stack projects built with a MERN state of mind' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
     
      <div className="category-container">Select A Category:
      {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name 
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
      </div>

      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;