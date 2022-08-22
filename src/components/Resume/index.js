import React from 'react'
import resumeFile from "../../assets/resume/resume.pdf";
import bioImage from "../../assets/about/bio-img.jpg";

function Resume () {

  return (
    <section className="my-5" >
      <h1 id="resume">Who am I?</h1>
      <img src={bioImage} className="my-2" style={{ width: "33%" }} alt="picture of shaun" />
      {/* insert resume iframe */}
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>
      </div>
    </section>
  )
}

export default Resume