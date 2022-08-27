import { React } from 'react';
import Navigation from '../Navigation';

function Header() {
    // const [categories] = useState([ 
    //     {
    //       name: 'Front-End',
    //       description: 'Projects built with HTML, CSS, JavaScript, and APIs with a focus on front-end development',
    //     },
    //     { name: 'OOP/ORM/TDD', description: 'Projects built with a focus on Object-Oriented Programming, Object Relational Mapping, and Test-Driven Development' },
    //     { name: 'Back-End', description: 'Projects with a focus on back-end development, featuring SQL, NoSQL, MVC' },
    //     { name: 'Full-Stack', description: 'Full Stack projects built with a MERN state of mind' },
    //   ]);
    
    //   const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
    //   const [contactSelected, setContactSelected] = useState(false);
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Navigation
                    // categories={categories}
                    // setCurrentCategory={setCurrentCategory}
                    // currentCategory={currentCategory}
                    // contactSelected={contactSelected}
                    // setContactSelected={setContactSelected}
            ></Navigation>
        </div>
    )
}

export default Header;