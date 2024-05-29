import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
