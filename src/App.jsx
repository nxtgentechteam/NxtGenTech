import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import ContactUs from "./sections/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
