import React from "react";
import "./funfactSection.css";

export const FunfactSection = () => {
  return (
    <div className="funfact-section-layout">
      <div className="row funfact-section-content">
        <div className="col-3 funfact-section-content-description">
            <span className="funfact-section-content-description-nm">500+</span><br/>
            <span className="funfact-section-content-description-txt">Total Videos</span>
        </div>
        <div className="col-3 funfact-section-content-description">
            <span className="funfact-section-content-description-nm">10+</span><br/>
            <span className="funfact-section-content-description-txt">Position</span>
        </div>
        <div className="col-3 funfact-section-content-description">
            <span className="funfact-section-content-description-nm">200+</span><br/>
            <span className="funfact-section-content-description-txt">Subscribers</span>
        </div>
        <div className="col-3 funfact-section-content-description">
            <span className="funfact-section-content-description-nm">100+</span><br/>
            <span className="funfact-section-content-description-txt">Awards</span>
        </div>
      </div>
    </div>
  );
};
