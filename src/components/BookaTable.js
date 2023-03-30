import "./BookaTable.css"
import BookingForm from "./BookingForm"
import restaurantImg from "../assets/restaurant.jpg"
function BookaTable({times, dispatchEvent, submitFn}) {
  return (
    <div className="booking">
        <img src={restaurantImg} alt="Restaurant" />
        <h2>Book Now</h2>
        <BookingForm availableTimes={times} dispatchEvent={dispatchEvent} submitAPI={submitFn} />
    </div>
  )
}

export default BookaTable
