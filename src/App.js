import React, { useState } from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
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
        <div>
            <Header
            // categories={categories}
            // setCurrentCategory={setCurrentCategory}
            // currentCategory={currentCategory}
            // contactSelected={contactSelected}
            // setContactSelected={setContactSelected}
            >
                    
                {/* <Navigation
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                ></Navigation> */}
            </Header>

            <main>
                {!contactSelected ? (
                    <>
                        <Portfolio currentCategory={currentCategory}></Portfolio>
                        <Resume></Resume>
                        <About></About>
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;