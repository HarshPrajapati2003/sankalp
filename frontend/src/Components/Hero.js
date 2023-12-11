import React, { useContext, useEffect, useState } from "react";
import Plant from "../Assets/plant2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp,faGift } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import { t } from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UserContext } from "./Context";

// https://media.istockphoto.com/id/958503162/photo/polio-vaccine-in-india.jpg?s=612x612&w=0&k=20&c=craCBfzUWnzPmea7-KwjBl5YeHZgWkV3_wWKuMy-lDA=
//media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=612x612&w=0&k=20&c=HuSbhCK-BNFVSQsVfSa63gehixkKAfRak2HmQYw7mhY=
// https://media.istockphoto.com/id/154894553/photo/indian-girl-learning.jpg?s=612x612&w=0&k=20&c=9hjsQmdB3WRqpMOyCkcHVS2NuU6ZbDYTQHTd41Oq0dA=
// https://media.istockphoto.com/id/458065911/photo/poor-family-at-slum-area.jpg?s=612x612&w=0&k=20&c=hGsL1Qk0Snl9tR7xIkcfHaNPWJo00LVGrjykXwbpwn4=
// https://media.istockphoto.com/id/950210946/photo/humble-elder-man-portrait.jpg?s=612x612&w=0&k=20&c=T-0gNT6FbbJl8KSkbGl77N9NvUM_j6XA0JUflcI_0-Y=
// https://media.istockphoto.com/id/637444368/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=8J1u1H6ea2I90IbIDzcSA-kaNk-LaxT5IF_M1i_NKwY=
// https://media.istockphoto.com/id/1217207494/photo/people-in-masks-serving-food-to-underprivileged-people-like-maids-drivers-house-cleaners-etc.jpg?s=612x612&w=0&k=20&c=B3VjtayVouv6FZzyV7RyRDdr-_J-pst8UXSFSRnM5Yg=
// https://media.istockphoto.com/id/1251333823/photo/poor-indian-girl-asking-for-help.jpg?s=612x612&w=0&k=20&c=KL3TovGwyX_5R39qS3zQ2uiYKGrjqtz3PUoFfD_u8cM=
// https://media.istockphoto.com/id/1296313070/photo/patients-seen-waiting-for-their-turn-to-get-medical-examination-done-at-krishnarajendra.jpg?s=612x612&w=0&k=20&c=FOwwfC8rZHu_cSPO9ZMXHyvf04UDSQM2dOscZzQd_Ks=
// https://media.istockphoto.com/id/958503162/photo/polio-vaccine-in-india.jpg?s=612x612&w=0&k=20&c=craCBfzUWnzPmea7-KwjBl5YeHZgWkV3_wWKuMy-lDA=

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const { user, setUser, reciept, setReciept } = useContext(UserContext);
  useEffect(() => {
    console.log("Hero page : ", reciept);
  }, [reciept]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"></p>
          <h2 className="text-title">
            "Sankalp Sahayata: Empowering Lives, Igniting Hope"
          </h2>
          <p className="text-descritpion">
            Our platform is crafted to streamline the process of making a
            positive impact on the lives of those in need. Whether you're a
            philanthropist, a community advocate, or simply someone with a
            compassionate heart, our tool facilitates seamless online donations.
            Join us in this journey of compassion, where every contribution
            serves as a beacon of hope. Together, let's make a difference and
            create a brighter future for the underserved. Start your journey of
            giving with Sankalp Sahayata!
          </p>
          <a href="#donate">
            <button className="text-appointment-btn" type="button">
              <FontAwesomeIcon icon={faGift} /> Donate Money
            </button>
          </a>
          <span> </span>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>100%</p>
              <p>Trusted Organization</p>
            </div>

            <div className="text-stats-container">
              <p>100%</p>
              <p>Meaningful Impact</p>
            </div>

            {/* <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div> */}
          </div>
        </div>

        <div className="hero-image-section">
          {/* <img
            className="hero-image1"
            src="https://media.istockphoto.com/id/458065911/photo/poor-family-at-slum-area.jpg?s=612x612&w=0&k=20&c=hGsL1Qk0Snl9tR7xIkcfHaNPWJo00LVGrjykXwbpwn4="
            alt="Plant"
          /> */}
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk="
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=612x612&w=0&k=20&c=HuSbhCK-BNFVSQsVfSa63gehixkKAfRak2HmQYw7mhY="
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/458065911/photo/poor-family-at-slum-area.jpg?s=612x612&w=0&k=20&c=hGsL1Qk0Snl9tR7xIkcfHaNPWJo00LVGrjykXwbpwn4="
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.istockphoto.com/id/958503162/photo/polio-vaccine-in-india.jpg?s=612x612&w=0&k=20&c=craCBfzUWnzPmea7-KwjBl5YeHZgWkV3_wWKuMy-lDA="
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
