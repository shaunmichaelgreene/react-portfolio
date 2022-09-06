import React, { useState } from 'react';
import Project from '../Project';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: "Run-Buddy",
      category: "Front-End",
      description: 'First course project, focus on HTML and CSS basics.',
      url: "https://github.com/shaunmichaelgreene/horiseon"
    },
    {
      name: 'Horiseon',
      category: 'Front-End',
      description:
        'Second course project, focus on existing code refactor for HTML/CSS & overall functionality improvements.',
      url: "https://github.com/shaunmichaelgreene/horiseon"
    },
    {
      name: 'Password-Generator',
      category: 'Front-End',
      description:
        'Fourth course project, in-browser app with dynamically updated HTML & CSS powered by javascript. Users can generate a random password based on criteria they have selected.',
      url: "https://github.com/shaunmichaelgreene/password-generator"
    },
    {
      name: 'Coding-Quiz',
      category: 'Front-End',
      description:
        'Multi-page browser app with timer-based coding quiz that stores high scores using client-side storage.',
      url: "https://github.com/shaunmichaelgreene/coding-quiz"
    },
    {
      name: 'Work-Day-Scheduler',
      category: 'Front-End',
      description:
        'Eighth course project, calendar app that lets users schedule events for each hour of the day. Focus on 3rd-party libraries such as Bootstrap, jQuery, Moment.JS and CDNs.',
      url: "https://github.com/shaunmichaelgreene/work-day-scheduler"
    },
    {
      name: 'Weather-Dashboard',
      category: 'Front-End',
      description:
        'Application that allows users to search for a city and find its current and forecasted weather conditions. Uses server-side API requests to fetch & parse data, handle responses, and dynamically generate HTML content.',
      url: "https://github.com/shaunmichaelgreene/weather-dashboard"
    },
    {
      name: 'Nature-Finder',
      category: 'Front-End',
      description:
        'First group project. HTML, CSS, and JS blended with multiple 3rd-party and server-side APIs to develop a simple search application to retrieve info on local points of interest (parks, trails, landmarks, etc).',
      url: "https://github.com/shaunmichaelgreene/nature-finder"
    },
    {
      name: 'README-Generator',
      category: 'OOP-ORM-TDD',
      description:
        'An intuitive Node.js command line application that receives user input about a new project and generates a professional README file in Markdown format.',
      url: "https://github.com/shaunmichaelgreene/readme-generator"
    },
    {
      name: 'Team-Profile-Generator',
      category: 'OOP-ORM-TDD',
      description:
        'A unique node.JS app that uses object-oriented-programming and that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
      url: "https://github.com/shaunmichaelgreene/team-profile-generator"
    },
    {
      name: 'Note-Taker',
      category: 'OOP-ORM-TDD',
      description:
        'Primarily a server-side app that allows users to write and save notes. The front end has been tied to the back end using Express.js to save/retrieve note data with a JSON file. The application is also deployed live to Heroku, making it easy for the user to keep track of their notes and tasks across multiple sessions.',
      url: "https://github.com/shaunmichaelgreene/note-taker"
    },
    {
      name: 'E-Commerce-Back-End',
      category: 'Back-End',
      description:
        'A relatively simple back-end for an e-commerce site created with Node.js by taking a functional Express API and using the Sequelize ORM library to interact with a MySQL database. Users can interact with the database using CRUD methods to view, create, update, and delete products, product categories, and product tags.',
      url: "https://github.com/shaunmichaelgreene/e-commerce-back-end"
    },
    {
      name: 'Tech-Blog',
      category: 'Back-End',
      description:
        'A completely full-stack CMS-style blog website! Users can log in, publish posts, and add comments to other posts. This app was built entirely from scratch and deployed like with Heroku.',
      url: "https://github.com/shaunmichaelgreene/tech-blog"
    },
    {
      name: 'The-Last-Word',
      category: 'Back-End',
      description:
        'Second group project. First collaborative full-tack application. Message board based game that encourages lengthy civil arguments that are decided through a battle of attrition. He or She who yells the loudest and the longest shall prevail! Users can post a topic for for others to discuss via comments, and whoever has the last word wins the argument! If a post or comment does not receive a comment reply within 24 hours, the post will lock and the most recent poster/commenter will win The Last Word award.',
      url: "https://github.com/shaunmichaelgreene/the-last-word"
    },
    {
      name: 'Social-Network-API',
      category: 'Back-End',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Budget-Tracker',
      category: 'Back-End',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Deep-Thoughts',
      category: 'Full-Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Group-Project-3',
      category: 'Full-Stack',
      description:
        'Third group project. Complete full-stack project built with MongoDB, Express, React, and Node. This is a podcast search engine for the animal lover, appropriately named PawedCaster. Users can quickly and conveniently locate animal & pet-related podcasts for simple streaming and following. All proceeds benefit the ASPCA, World Wildlife Fund, and local animal rescues.',
      url: "https://github.com/shaunmichaelgreene/group-project-3"
    }
  ])

  const currentProjects = projects.filter(project => project.category === category);
  const [currentProject, setCurrentProject] = useState();
  
  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Project currentProject={currentProject} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
                    
          <img
            src={require(`../../assets/small/${category}/${image.name} preview.JPG`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          
        ))}
      </div>
    </div>
  );
};

export default ProjectList;