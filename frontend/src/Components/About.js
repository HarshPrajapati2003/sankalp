import React from "react";
import Plant from "../Assets/aboutPlant.avif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function About() {
  const { t } = useTranslation();
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        {/* <img src={Plant} alt="Plant" className="about-image1" /> */}
        <div
          id="carouselExampleIndicators1"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1089055478/photo/cheerful-group-of-volunteers.jpg?s=612x612&w=0&k=20&c=6ZbZveP-Jyu9xdGBHisPKMj23OA2L_QY8tko46ZJNmI="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1394763799/photo/doctor-with-nurse-examining-patient-lying-on-hospital-bed.jpg?s=612x612&w=0&k=20&c=jAlwS5pwd1OenBCoITWMkTeqQaGMhoS7tJpgIe5GHLU="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1319588436/photo/diverse-adults-packing-donation-boxes-in-charity-food-bank.jpg?s=612x612&w=0&k=20&c=4Nc1HIaIfw3JaPhYhpZFtk8izCzyNSULeTufuOctXQs="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/472102653/photo/volunteers-helping-to-clean-up-the-beachduring-hindu-ganesha-festival.jpg?s=612x612&w=0&k=20&c=O3h-FkgpdqNbr74ecQNXATgo_ZPJXst-jUZRJAzeK0Q="
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>{t("about1")}</span>
        </h3>
        <p className="about-description">
          We're dedicated to positive change. Through non-profitable donations,
          we focus on education, healthcare, community development, support for
          seniors and individuals with disabilities, and emergency relief. Join
          us in creating a world where everyone thrives.
        </p>
        <h4 className="about-text-title" style={{ marginBottom: "13px" }}>
          Our Vision
        </h4>
        <p className="about-description" style={{ marginTop: "2px" }}>
          Our vision is a world where every individual thrives, irrespective of
          circumstance. We aspire to be a beacon of hope, fostering empathy,
          inclusivity, and collective responsibility for a brighter, more
          compassionate global community.
        </p>
        <h4 className="about-text-title" style={{ marginBottom: "13px" }}>
          Our Mission
        </h4>
        <p className="about-description" style={{ marginTop: "2px" }}>
          Our mission is to uplift communities through strategic initiatives in
          education, healthcare, and support for the underserved. With
          transparency, community engagement, and a commitment to sustainable
          change, we strive to make a meaningful impact. Join us in this
          compassionate journey.
        </p>
      </div>
    </div>
  );
}

export default About;
