import React from "react";
import featureImage from "../../assets/img/feature-section-image.webp";
import "./featureSection.css"

export const FeatureSection = () => {
  return (
    <div className="feature-section-layout">
      <div className="row feature-section-content">
        <div className="col-7 feature-section-description">
          <span className="feature-section-description-line-one">
            Enjoy Watching Them on TV.
          </span><br/>
          <span className="feature-section-description-line-two">
            Whether it's Smart TV, Xbox, Apply TV, Watch Your Favorite Program
            with Great Pleasure.
          </span>
        </div>
        <div className="col-5 feature-section-image">
          <span><img src={featureImage} className="img-fluid"/></span>
          
        </div>
      </div>
    </div>
  );
};
