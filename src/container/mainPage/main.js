import React from "react";
import { MainSection } from "../../components/mainSection/mainSection";
import { FeatureSection } from "../../components/featureSection/featureSection";
import { FunfactSection } from "../../components/funfactSection/funfactSection";
import { SubscrictionSection } from "../../components/subscrictionSection/subscrictionSection";

export const MainPage = () => {
  return (
    <div>
      <div className="row">
        <MainSection />
      </div>
      <div className="row">
        <FeatureSection />
      </div>
      <div className="row">
        <FunfactSection/>
      </div>
      <div>
        <SubscrictionSection/>
      </div>
    </div>
  );
};
