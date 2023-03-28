import "./BookaTable.css"
import BookingForm from "./BookingForm"
function BookaTable({times, dispatchEvent, submitFn}) {
  return (
    <>
        <h2>Book Now</h2>
      <BookingForm availableTimes={times} dispatchEvent={dispatchEvent} submitAPI={submitFn} />
    </>
  )
}

export default BookaTable
