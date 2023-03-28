import "./Main.css";
import Homepage from "./Homepage";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes> 
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/specials" element={<Specials/>}></Route>
          <Route path="/testimonials" element={<CustomersSay/>}></Route>
          <Route path="/chicago" element={<Chicago/>}></Route>
      </Routes>
    </main>
  )
}
