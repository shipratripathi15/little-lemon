import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className='header'>
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
