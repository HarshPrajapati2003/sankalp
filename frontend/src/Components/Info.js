import React from "react";
import InformationCard from "./InformationCard";
import { faPlay, faImage,faMobileScreen, faSchool, faNotesMedical, faGroupArrowsRotate, faEnvelopeOpen, faPerson, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { useTranslation } from "react-i18next";
import SolutionStep from "./SolutionStep";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="info-section" id="info">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>
            How is the donation distributed among different components?
          </span>
        </h3>
        {/* <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p> */}
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Education"
          description="Providing scholarships, school supplies, and educational programs, ensuring that every individual, regardless of financial constraints, has access to quality education and opportunities for personal and academic growth."
          icon={faSchool}
        />

        <InformationCard
          title="Healthcare"
          description="Offering financial assistance for medical treatments, surgeries, and medications, and supporting healthcare initiatives to enhance the overall well-being and health outcomes of those in need."
          icon={faNotesMedical}
        />

        <InformationCard
          title="Community Development"
          description="Initiating infrastructure projects, such as building schools and community centers, ensuring access to clean water and sanitation facilities, and fostering sustainable development for improved living conditions."
          icon={faGroupArrowsRotate}
        />
        <InformationCard
          title="Support for Senior Citizens"
          description="Delivering assistance, care, and emotional support to senior citizens without financial resources, promoting dignity and comfort in their golden years."
          icon={faEnvelopeOpen}
        />
        <InformationCard
          title="Empowerment of Individuals with Disabilities"
          description="Implementing accessibility projects, skill development programs, and activities that foster inclusivity, independence, and an improved quality of life for individuals with disabilities."
          icon={faPerson}
        />
        <InformationCard
          title="Emergency Relief"
          description="Providing immediate relief in times of natural disasters, crises, or emergencies, including distributing food, offering shelter, and delivering essential medical aid to those affected, ensuring rapid and effective response."
          icon={faTruckMedical}
        />
      </div>
    </div>
  );
}

export default Info;
