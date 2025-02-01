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
        <Card bordered={false}>
        <div className="subscription-section-card-content">
              <div className="subscription-section-card-title-2">
                <div>
                  <span className="subscription-section-card-title-price-2">$100.00</span>
                  <br/>
                  <span>Premium</span>
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
              <div className="subscription-section-card-button-section-2">
                <span>
                  <button className="black-button-2">Choose A Plan</button>
                </span>
              </div>
            </div>
        </Card>
        </div>
        
        <div className="col-4">
          <Card bordered={false}>
          <div className="subscription-section-card-content">
              <div className="subscription-section-card-title">
                <div>
                  <span className="subscription-section-card-title-price">$200.00</span>
                  <br/>
                  <span>Standard</span>
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
      </div>
    </div>
  );
};
