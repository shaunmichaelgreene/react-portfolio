import React from 'react';

function Footer() {
    return (
        <div>
            <p>
                <span>&copy;</span> 2022 Shaun Greene  |  
                <img src={require`../../assets/icons/email-icon.jpeg`} className="inline" alt="Email icon"></img>
                </p>
            <p>Thank you for visiting!</p>
        </div>
    )
}

export default Footer;

{/* <img src={require`../../assets/icons/email-icon.jpeg`} className="inline" alt="Email icon"></img>
                <a href="mailto:shaunmichaelgreene@gmail.com">shaunmichaelgreene@gmail.com</a>  |  
                <img src={require`../../assets/images/linkedin-icon.png`} className="inline"  alt="LinkedIn icon"></img>
                <a href="https://www.linkedin.com/in/shaunmichaelgreene/">shaunmichaelgreene</a>  |  <a href="https://github.com/shaunmichaelgreene">shaunmichaelgreene</a></p> */}