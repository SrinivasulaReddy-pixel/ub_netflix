import React, { useState } from "react";
import "./profiledetails.css";
import { AccountDetails } from "../accountdetails/accountdetails";
import { PaymentInfo } from "../paymentinfo/paymentinfo";

export const ProfileDetails = () => {
  const [accountDetailPage, setAccountDetail] = useState(true);

  return (
    <div className="profile-details">
      <div className="profile-details-layout container">
      <span
        className="profile-details-account"
        onClick={(e) => {
          e.preventDefault();
          setAccountDetail(true);
        }}
      >
        Account Details
      </span>
      <span
        className="profile-details-payment"
        onClick={(e) => {
          e.preventDefault();
          setAccountDetail(false);
        }}
      >
        Payment info
      </span>
      <div>
        <div>
          {accountDetailPage && <AccountDetails />}
          {!accountDetailPage && <PaymentInfo/>}
        </div>
      </div>
    </div>
    </div>
  );
};
