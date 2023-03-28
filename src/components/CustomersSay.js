import React from 'react'
import "./CustomersSay.css"
import StarIcon from '@mui/icons-material/Star';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Testimonial() {
  return (
    <section id="testimonial">
        <div className="box">
            <h4>Rating 
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </h4>
            <div className="profile">
                <AccountBoxIcon />
                <span>Anonymous</span>
            </div>
            <p>Praesent consectetur dapibus eros id elementum.</p>
        </div>
        <div className="box">
            <h4>Rating 
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </h4>
            <div className="profile">
                <AccountBoxIcon />
                <span>Anonymous</span>
            </div>
            <p>Praesent consectetur dapibus eros id elementum.</p>
        </div>
        <div className="box">
            <h4>Rating 
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </h4>
            <div className="profile">
                <AccountBoxIcon />
                <span>Anonymous</span>
            </div>
            <p>Praesent consectetur dapibus eros id elementum.</p>
        </div>
        <div className="box">
            <h4>Rating 
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </h4>
            <div className="profile">
                <AccountBoxIcon />
                <span>Anonymous</span>
            </div>
            <p>Praesent consectetur dapibus eros id elementum.</p>
        </div>
    </section>
  )
}

export default Testimonial
