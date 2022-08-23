import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
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
        { name: 'OOP/ORM/TDD', description: 'Portraits of people in my life' },
        { name: 'Back-End', description: 'Delicious delicacies' },
        { name: 'Full-Stack', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
      ]);
    
      const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
      const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Header>
                <Navigation
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                ></Navigation>
            </Header>

            <main>
                {!contactSelected ? (
                    <>
                        <Portfolio currentCategory={currentCategory}></Portfolio>
                        <About></About>
                        <Resume></Resume>
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