import React from 'react'
import bioImage from "../../assets/about/bio-img.jpg";

function About() {
  const image = <a href="https://i.imgur.com/UBmMl4Q.jpeg" target="_blank" rel="noopener noreferrer">Gunner & Rousey</a>

  return (
    <section className="my-5" >
      <h1 id="about">About Shaun</h1>
      <div className="bio">
        <img src={bioImage} className="my-2 bio-image" alt="shaun" />
        <p className="bio-text">
        Full stack developer working to apply my technical & communication skills in an Analyst or Developer role. Recently earned a Certificate in Full Stack Web Development from Michigan State University. I have a diverse professional background, with prior experience in sales, business development, project management, oil & gas, and title research. My colleagues know me as a reliable leader & trainer, with a unique ability to explain complex concepts in a meaningful and impactful way. My current assignment at work has me acting as a liaison between our technology and client-facing teams, while also writing process content for a decision tree application. I love front-end development and have a strong passion for JavaScript. I love solving problems and learning new technologies & languages. When I'm not coding, I enjoy building custom furniture, working on home improvements, and hiking with my dogs - {image}.
      </p>
      </div>
      <div className="my-2">
      </div>
    </section>
  )
}

export default About