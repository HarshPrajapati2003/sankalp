import React from "react";
import Plant from "../Assets/Plant3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import { useTranslation } from "react-i18next";
import SolutionStep from "./SolutionStep";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function BookAppointment() {
  const navigate = useNavigate();
   const { t } = useTranslation();

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        {/* <img src={Plant} alt="Doctor Group" className="ba-image1" /> */}
        <div
          id="carouselExampleIndicators2"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/154894553/photo/indian-girl-learning.jpg?s=612x612&w=0&k=20&c=9hjsQmdB3WRqpMOyCkcHVS2NuU6ZbDYTQHTd41Oq0dA="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1395727601/photo/group-of-teenager-village-school-kids-planting-tree-while-looking-at-camera-concept-of.jpg?s=612x612&w=0&k=20&c=0WRQSt7PMNeypnshUB-M0bLjSbzZut2TygfqfWwRrVI="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/503167134/photo/farmer-working-in-the-field.jpg?s=612x612&w=0&k=20&c=UoNFohryxLk4kdHfSKDh94VP3icZ-Rpm0_k3DuSeSVk="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1392760921/photo/caregiver-or-nurse-helping-senior-patient-to-get-up-from-wheel-chair-at-hospital-garden.jpg?s=612x612&w=0&k=20&c=wDi290xtEVI9aEVya1KboFjs28_0IgGHphHm0dsS27U="
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Our Commitment</span>
        </h3>
        {/* <p className="ba-description">{t("book2")}</p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book3")}
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book4")}
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book5")}
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book6")}
        </p> */}

        {/* <button
          className="text-appointment-btn"
          type="button"
          
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button> */}
        {/* <h4 className="about-text-title">Our Commitment</h4> */}

        <SolutionStep
          title="Impactful Initiatives:"
          description="We are committed to executing strategic initiatives in education, healthcare, and community development that make a tangible and positive impact on the lives of those in need."
        />

        <SolutionStep
          title="Transparency and Accountability:"
          description="Our commitment extends to maintaining transparent practices, ensuring accountability in the allocation of non-profitable donations, and providing donors with a clear understanding of the outcomes of their contributions."
        />

        <SolutionStep
          title="Community Empowerment:"
          description="We pledge to empower communities through initiatives that promote inclusivity, resilience, and sustainable change. Our commitment is grounded in the belief that collective efforts can create lasting transformations."
        />
      </div>
    </div>
  );
}

export default BookAppointment;
