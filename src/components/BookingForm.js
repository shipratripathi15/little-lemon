import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./BookingForm.css"
function BookingForm({availableTimes,dispatchEvent,submitAPI}) {
    const [date, setDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(4);
    const [occasion, setOccasion] = useState("birthday");
    const timeRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            date: date,
            time: timeRef.current.value,
            noOfGuests: noOfGuests,
            occasion: occasion
        }
        const isFormSubmitted = submitAPI(formData)
        if(isFormSubmitted)
        navigate("/confirmedbooking")
    }
    
    const handleDate = (e) =>{
        if(e.target.value){
            dispatchEvent(e.target.value);
            setDate(e.target.value);
        }
    }
  return (
    <form>
        <div className="formGroup">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDate} />
        </div>
        <div className="formGroup">    
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" ref={timeRef}>
                {availableTimes.map((time) =>
                    <option key={time} value={time}>{time}</option>
                )}
            </select>
        </div>
        <div className="formGroup">    
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} />
        </div>
        <div className="formGroup">    
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
        </div>
        <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
    </form>
  )
}

export default BookingForm
