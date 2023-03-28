import React from 'react'
import food from "../assets/restauranfood.jpg";
import CallToAction from './CallToAction';
import "./Homepage.css"

export default function Reserve() {
  return (
    <section id="reserve">
        <div className="content">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>
            <CallToAction />
            
        </div>
        <figure>
            <img className="food" src={food} alt="Food" />
        </figure>
    </section>
  )
}
