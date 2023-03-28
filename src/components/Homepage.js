import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import food from "../assets/restauranfood.jpg";
import BookaTable from './BookaTable';
import "./Homepage.css"

export default function Reserve() {
  return (
    <section id="reserve">
        <div className="content">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>
            <Link  className="reserve" to="/bookatable" path="relative">Reserve a table</Link>
        </div>
        <figure>
            <img className="food" src={food} alt="Food" />
        </figure>
    </section>
  )
}
