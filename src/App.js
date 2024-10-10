import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainPage from "./pages/MainPage/mainPage";
import MobileHeader from "./components/header/mobileHeader/MobileHeader";

function App() {
  const userLocation = useLocation().pathname;

  useEffect(() => {
    window.localStorage.setItem("fixingReaload", true);
  }, [userLocation]);
  return (
    <>
      <Header />
      <section className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
