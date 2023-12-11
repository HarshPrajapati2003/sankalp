import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import { useTranslation } from "react-i18next";

function LegalDocs() {
   const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">Sankalp Sahayata</Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info </p>
        <p className="legal-description">
          {" "}
          Sankalp Sahayata operates as a non-profit organization committed to
          positive change. Contributions made are non-refundable, and every
          donation directly supports our mission. Donations are not intended for
          personal gain or fame but are dedicated solely to uplifting those in
          need.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          {" "}
          We prioritize your privacy. All personal information provided during
          the donation process is handled with utmost confidentiality. We do not
          share or use your data for any purposes beyond the scope of our
          mission. Your trust is integral to our commitment to transparency and
          accountability.
        </p>

        {/* <p className="legal-title">{t("legaldoc6")}</p>
        <p className="legal-description">{t("legaldoc7")}</p> */}

        {/* <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </p> */}

        {/* <p className="legal-title">{t("legaldoc8")}</p>
        <p className="legal-description">{t("legaldoc9")}</p> */}
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 GreenMed Lens. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
