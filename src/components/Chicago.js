import React from 'react'
import "./Chicago.css"
import about1 from "../assets/Mario and Adrian A.jpg"
import about2 from "../assets/Mario and Adrian b.jpg"

function About() {
  return (
    <section id="about">
        <div className="content">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>

        </div>
        <div className="photos">
            <img src={about1} alt="About" />
            <img src={about2} alt="About" />
        </div>
    </section>
  )
}

export default About
