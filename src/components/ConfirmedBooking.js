import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./ConfirmedBooking.css"

function ConfirmedBooking() {

  return (
    <div className="confirm">
      <div className="msg">Your booking has been confirmed!</div>
      <Link to="./bookatable" role="button" aria-label="On Click">Back</Link>
    </div>
  )
}

export default ConfirmedBooking
