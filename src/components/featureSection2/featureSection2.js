import React from "react";
import "./featureSection2.css";
import featureImage2 from "../../assets/img/landing-feature-3.webp";

export const FeatureSection2 = () => {
  return (
    <div className="feature-Section2-layout">
      <div className="row feature-section2-content">
        <div className="col-6 feature-section2-description">
          <span className="feature-section2-description-one">
            Watch Anywhere You Want.
          </span>
          <br />
          <span className="feature-section2-description-two">
            Watch an endless number of shows, on your phone, tablet, laptop, and
            TV.
          </span>
          <div className="feature-section2-button">
            <button className="feature-section2-button-content">
              Watch Now
            </button>
          </div>
        </div>
        <div className="col-6 feature-section2-image">
          <span>
            <img src={featureImage2} className="img-fluid" />
          </span>
        </div>
      </div>
    </div>
  );
};
