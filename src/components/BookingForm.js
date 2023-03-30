
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./BookingForm.css"
function BookingForm({availableTimes,dispatchEvent,submitAPI}) {
    const [date, setDate] = useState('');
    const [noOfGuests, setNoOfGuests] = useState(4);
    const [occasion, setOccasion] = useState("birthday");
    const timeRef = useRef();
    const navigate = useNavigate();
    const today =  new Date();
    const handleSubmit = (e) =>{
         e.preventDefault();
        const formData = {
            date: date,
            time: timeRef.current.value,
            noOfGuests: noOfGuests,
            occasion: occasion
        }
        if(validateForm()){
            const isFormSubmitted = submitAPI(formData)
            if(isFormSubmitted)
            navigate("/confirmedbooking")
        }
    }
    const validateForm = () =>{     
        return (date !== '' && new Date(date) < new Date() && noOfGuests > 0 && timeRef.current.value !== "" && occasion !== "" )
    }
    const handleDate = (e) =>{
        if(e.target.value){
            validateForm();
            dispatchEvent(e.target.value);
            setDate(e.target.value);
        }
    }
    const errorStyle = {
        color:"red",
    }
    const handleNoofGuests = (e) =>{
        validateForm();
        setNoOfGuests(e.target.value);
    }
  return (
    <form>
        <div className="formGroup">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDate} />
        </div>
        {date !== '' && new Date(date) < new Date() && <p style={errorStyle}>Please select a date in future.</p>}
        <div className="formGroup">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" ref={timeRef} role="combobox">
                {availableTimes && availableTimes.length && availableTimes.map((time) =>
                    <option key={time} value={time}>{time}</option>
                )}
            </select>
        </div>
        <div className="formGroup">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={noOfGuests} onChange={handleNoofGuests} />
        </div>
            {noOfGuests <= 0 && <p style={errorStyle}>Please select guests greater than 0</p>}
        <div className="formGroup">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
        </div>
        <input type="submit" value="Make Your reservation" aria-label="On Click" onClick={handleSubmit} disabled={!validateForm()} />
    </form>
  )
}

export default BookingForm
