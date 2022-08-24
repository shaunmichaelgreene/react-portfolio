import React from 'react'
// import coverImage from "../../assets/cover/workshop.jpg";
import bioImage from "../../assets/about/bio-img.jpg";


function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Shaun</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <img src={bioImage} className="my-2" style={{ width: "33%" }} alt="shaun" />
      <div className="my-2">
        <p>
        Shaun Greene is an amateur developer, carpenter, and woodworker. He is currently progressing through the Full Stack Development Certification course at Michigan State University. Professionally, Shaun has worn many hats during his career. With prior experience in sales, business development, project management, oil & gas, and land management; Shaun currently works as a President's Club Title Analyst for Rocket Companies. Shaun is focused on securing a full-time position as a developer upon graduation in September. Shaun spends his free time building custom furniture, working on home improvements, and hiking with his dogs - Gunner & Rousey.
      </p>
      </div>
    </section>
  )
}

export default About