import "./Main.css";
import Homepage from "./Homepage";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import { Route, Routes } from "react-router-dom";
import BookaTable from "./BookaTable";
import { useEffect, useReducer, useRef, useState } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
import { BrowserRouter } from "react-router-dom";

export default function Main() {
  
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };
  
 
  
  const initializeTimes = () => {
    const date = new Date();
    state.availableTimes = fetchAPI(date);
    return state.availableTimes;
  }
  const updateTimes = (state, action) => {
    const date = new Date(action);
    state.availableTimes = fetchAPI(date);
    return state;
  }
  const [state , dispatch] = useReducer(updateTimes, initializeTimes);
  

  return (
    <main>
      <Routes> 
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/specials" element={<Specials/>}></Route>
          <Route path="/testimonials" element={<CustomersSay/>}></Route>
          <Route path="/chicago" element={<Chicago/>}></Route>
          <Route path="/bookatable" element={
            <BookaTable times={initializeTimes()} dispatchEvent={dispatch}  submitFn={submitAPI}/>
          }></Route>
          <Route path="/confirmedbooking" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </main>
  )
}
