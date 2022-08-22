import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
    const [categories] = useState([ 
        {
          name: 'Front-End (HTML/CSS/JS)',
          description: 'Photos of grocery stores, food trucks, and other commercial projects',
        },
        { name: 'OOP/ORM/TDD', description: 'Portraits of people in my life' },
        { name: 'Back-End (SQL, NoSQL, MVC, React)', description: 'Delicious delicacies' },
        { name: 'Full-Stack (MERN, SPA)', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
      ]);
    
      const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
      const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Header>
                <Navigation>
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                </Navigation>
            </Header>

            <main>
                {!contactSelected ? (
                    <>
                        <Portfolio currentCategory={currentCategory}></Portfolio>
                        <About> </About>
                        <Resume> </Resume>
                    </>
                ) : (
                    <ContactForm> </ContactForm>
                )}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;