import React from 'react'
import "./Order.css"
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import greekSalad from "../assets/greek salad.jpg";
import lemonDessert from "../assets/lemon dessert.jpg"
import bruchetta from "../assets/bruchetta.svg"

function Order() {
  return (
    <section id="order">
        <div className="header">
            <h3>This weeks specials</h3>
            <button>Online Menu</button>
        </div>
        <div className="body">
            <div className="box">
                <figure>
                    <img src={greekSalad} alt="Greek Salad" />
                </figure>
                <div className="box-content">
                    <div className="header">
                        <h4>Greek Salad</h4>
                        <span className="highlight">$12.89</span>
                    </div>
                    <p className="content">Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>
                    <button className="delivery">Order a delivery <DirectionsBikeIcon /></button>
                </div>
            </div>
            <div className="box">
                <figure>
                    <img src={lemonDessert} alt="Lemon Dessert" />
                </figure>
                <div className="box-content">
                    <div className="header">
                        <h4>Lemon Dessert</h4>
                        <span className="highlight">$12.89</span>
                    </div>
                    <p className="content">Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>
                    <button className="delivery">Order a delivery <DirectionsBikeIcon /></button>
                </div>
            </div>
            <div className="box">
                <figure>
                    <img src={bruchetta} alt="Bruchetta" />
                </figure>
                <div className="box-content">
                    <div className="header">
                        <h4>Bruchetta</h4>
                        <span className="highlight">$12.89</span>
                    </div>
                    <p className="content">Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur dapibus eros id elementum. Maecenas pharetra felis sed vulputate posuere.</p>
                    <button className="delivery">Order a delivery <DirectionsBikeIcon /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Order
