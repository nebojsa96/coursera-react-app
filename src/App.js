import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking-confirmation" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
