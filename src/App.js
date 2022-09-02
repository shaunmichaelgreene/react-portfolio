import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [categories] = useState([
        {
            name: "Front-End",
            description:
                "Projects built with HTML, CSS, JavaScript, and APIs with a focus on front-end development",
        },
        {
            name: "OOP-ORM-TDD",
            description:
                "Projects built with a focus on Object-Oriented Programming, Object Relational Mapping, and Test-Driven Development",
        },
        {
            name: "Back-End",
            description:
                "Projects with a focus on back-end development, featuring SQL, NoSQL, MVC",
        },
        {
            name: "Full-Stack",
            description: "Full Stack projects built with a MERN state of mind",
        },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
    
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio currentCategory={currentCategory} />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
