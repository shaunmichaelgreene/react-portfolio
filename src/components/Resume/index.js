import React from 'react'
import resumeFile from "../../assets/resume/resume.pdf";

function Resume () {

  return (
    <section className="my-5" >
      <h1 id="resume">Resume</h1>
      
      <div id="resume-container" className="resume">
        <object data={resumeFile} type="application/pdf" width="100%" height="100%">
        </object>
      </div>
      <div className="my-2">
        <p>
          Check out Shaun's CV above.
      </p>
      </div>
    </section>
  )
}

export default Resume