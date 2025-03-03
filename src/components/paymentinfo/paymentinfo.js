import React from "react";
import "./paymentinfo.css";
import CreditCard from "../../assets/img/credit-card.webp";

export const PaymentInfo = () => {
  return (
    <div className="payment-info-layout container">
      <div className="row payment-info-description-row1 container">
        <span>Current Plan</span>
        <div className="row">
          <div className="col-md-3">
            <span>GOLD</span>
            <br />
            <span>39$</span>
            <br />
            <span>$45/mo</span>
          </div>
          <div className="col-md-3">
            <span>50GB Storage</span>
            <br />
            <span>500 Databases</span>
            <br />
            <span>Free Support</span>
          </div>
          <div className="col-md-3">
            <span>8GB RAM</span>
            <br />
            <span>1TB Bandwidth</span>
            <br />
            <span>Unlimited Accounts</span>
          </div>
          <div className="col-md-3">
            <span>
              <button className="btn-red">Upgrade Plan</button>
            </span>
          </div>
        </div>
      </div>
      <div className="row payment-info-description-row2 container">
        <span>Payment Method</span>
        <div className="row">
          <div className="col-md-5">
            <img src={CreditCard} />
          </div>
          <div className="col-md-7 payment-info-description-row2-col7">
            <span>Refer a friend and save</span>
            <br />
            <span>
              Receive 1 MONTH FREE for each of your friends that purchase an
              account
            </span>
            <br />
            <span>
              <button className="btn-red">Refer a friend</button>
            </span>
          </div>
        </div>
      </div>
      <div className="row payment-info-description-row3 container">
        <span>
          <button className="btn-red">End This Card</button>
          <br />
          <button className="btn-red">Add a new payment method</button>
        </span>
      </div>
    </div>
  );
};
