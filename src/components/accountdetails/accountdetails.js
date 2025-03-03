import React, { useRef, useState } from "react";
import "./accountdetails.css";
import ProfilePic from "../../assets/img/profile-pic.webp";

export const AccountDetails = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(ProfilePic);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-details-layout">
      <div className="contrainer">
        <div className="row">
          <div className="col-lg-2 account-details-image-section">
            <span>
              <img src={imagePreview} alt="Profile" className="profile-img" />
            </span>
            <span
              onClick={handleButtonClick}
              style={{
                cursor: "pointer",
                padding: "8px 12px",
                background: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              Upload Photo
            </span>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="col-lg-10">
            <div className="row account-details-description">
              <h4>General Information</h4>
              <span>
                By letting us know your name, we can make our support experience
                much more personal.
              </span>
              <div className="row">
                <div className="col-6">
                  <label>First Name</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="col-6">
                  <label>Last Name</label>
                  <br />
                  <input type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Display Name</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="col-6">
                  <label>Email Address</label>
                  <br />
                  <input type="email" />
                </div>
              </div>
            </div>

            <hr />
            <div className="row account-details-password-change">
              <h4>Password Change</h4>
              <div className="row">
                <div className="col-lg-4">
                  <label>Current Password</label>
                  <br />
                  <input type="password" />
                </div>
                <div className="col-lg-4">
                  <label>New Password</label>
                  <br />
                  <input type="password" />
                </div>
                <div className="collg-4">
                  <label>Confirm Password</label>
                  <br />
                  <input type="password" />
                </div>
                <hr />
              </div>
              <div>
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
