import "./BookaTable.css"
import BookingForm from "./BookingForm"
import { BrowserRouter } from "react-router-dom"
function BookaTable({times, dispatchEvent, submitFn}) {
  return (
    <>
        <h2>Book Now</h2>
      <BookingForm availableTimes={times} dispatchEvent={dispatchEvent} submitAPI={submitFn} />
    </>
  )
}

export default BookaTable
