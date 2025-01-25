import React from "react";
import "./subscrictionSection.css";
import { Card } from "antd";
const { Meta } = Card;

export const SubscrictionSection = () => {
  return (
    <div className="Subscriction-Section-layout">
      <div className="row Subscriction-Section-content">
        <div className="col-4">
          <Card  bordered={false}>
            <div className="subscription-section-card-content">
              <div className="subscription-section-card-title">
                <div>
                  <span className="subscription-section-card-title-price">$0.00</span>
                  <br/>
                  <span>Free</span>
                </div>
                
              </div>
              <ul>
                <li>Lorem ipsum dolor sit amet.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <div className="subscription-section-card-button-section">
                <span>
                  <button className="black-button">Choose A Plan</button>
                </span>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-4">
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
        </div>
        
        <div className="col-4">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
      </div>
    </div>
  );
};
