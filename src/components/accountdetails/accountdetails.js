import React, { useRef, useState } from "react";
import "./accountdetails.css";
import ProfilePic from "../../assets/img/profile-pic.webp";

export const AccountDetails = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(ProfilePic);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.displayName.trim()) newErrors.displayName = "Display Name is required";
    
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
    }

    if (formData.newPassword && formData.newPassword.length < 6) {
        newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword && formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log("Form submitted successfully", formData);
    }
  };

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
            <form onSubmit={handleSubmit}>
            <div className="row account-details-description">
                <h4>General Information</h4>
                <span>
                    By letting us know your name, we can make our support experience much more personal.
                </span>
                <div className="row">
                    <div className="col-6">
                        <label>First Name</label>
                        <br />
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
                    </div>
                    <div className="col-6">
                        <label>Last Name</label>
                        <br />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label>Display Name</label>
                        <br />
                        <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} />
                        {errors.displayName && <p style={{ color: "red" }}>{errors.displayName}</p>}
                    </div>
                    <div className="col-6">
                        <label>Email Address</label>
                        <br />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
                        <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
                    </div>
                    <div className="col-lg-4">
                        <label>New Password</label>
                        <br />
                        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                        {errors.newPassword && <p style={{ color: "red" }}>{errors.newPassword}</p>}
                    </div>
                    <div className="col-lg-4">
                        <label>Confirm Password</label>
                        <br />
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
                    </div>
                </div>
                <hr />
            </div>

            <div>
                <button type="submit">Save Changes</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
