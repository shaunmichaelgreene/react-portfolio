import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
    

    return (
        <div>
            <Header>
                <Navigation>

                </Navigation>
            </Header>

            <main>
                {!contactSelected ? (
                    <>
                        <Portfolio> </Portfolio>
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