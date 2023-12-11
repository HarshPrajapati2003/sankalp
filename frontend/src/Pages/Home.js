import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Check from "../Components/Check";
import ImageUpload from "../Components/ImageUpload";
import { UserContext } from "../Components/Context";
import Toast  from "../Components/Toast";

function Home() {
   const { register, handleSubmit, user, setUser, reciept, setReciept } =
     useContext(UserContext);
  const [display,setDisplay]=useState(false)
  useEffect(() => {
    if (localStorage.getItem("reciept")) setDisplay(true);
  }, [display, user]);
  return (
    <div className="home-section">
      <Navbar />
      {display && <Toast />}
      <Hero />
      <Info />
      <Services />
      <BookAppointment />
      <About />
      {/* <Doctors /> */}
      {/* <Check/> */}
      {/* <ImageUpload/> */}
      <Footer />
    </div>
  );
}

export default Home;
