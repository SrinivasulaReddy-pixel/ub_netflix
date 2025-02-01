import React from "react";
import "./footerCenterArea.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import footerStremo from "../../assets/img/footer-stremo.webp"
import voiceImage from "../../assets/img/footer-voice.webp";
import videoMusic from "../../assets/img/footer-videomusic.webp"
import movieNetwork from "../../assets/img/footer-movie-network.webp"
import freshJuice from "../../assets/img/footer-fresh-juice.webp"

export const FooterCenterArea = () => {
  return (
    <div className="footer-Center-Area-layout">
    <hr></hr>
      <div className="row footer-Center-Area-content">
        <div className="col-4 footer-Center-Area-col1">
          <div className="footer-Center-Area-col1-row1">
            <img src={footerStremo} />
          </div>
          <div className="footer-Center-Area-col1-row2">
            <span>
              With a search first mentality across digital marketing, our
              passionate consulting team is hands-on to help conquer anything
            </span>
          </div>
          <div className="footer-Center-Area-col1-row3">
            <FaFacebook />
            <AiFillTwitterCircle />
            <TiSocialLinkedinCircular />
            <FaInstagram />
          </div>
        </div>
        <div className="col-8 footer-Center-Area-col2">
          <div className="footer-Center-Area-col2-row1">
            <span>Home</span>
            <span>About US</span>
            <span>Series</span>
            <span>Contact US</span>
            <span>Tv Series</span>
            <span>Horror Series</span>
            <span>Live</span>
            <span>Video</span>
          </div>
          <div className="footer-Center-Area-col2-row2">
            <span><img src={voiceImage} /></span>
            <span><img src={videoMusic} /></span>
            <span><img src={movieNetwork} /></span>
            <span><img src={freshJuice} /></span>
          </div>
          <div className="footer-Center-Area-col2-row3">
            <span>Report a Bug</span>
            <span>Request a Feature</span>
            <span>Content Grievance</span>
            <span>Movie Request</span>
            <span>Submit Your Story</span>
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
            <span>Support</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row footer-final-content">
        <div className="col-6 footer-final-content-col1">
          <span>Copyright © 2022 All right reserve</span>
        </div>
        <div className="col-6 footer-final-conten-col2">
          <span>Already have an Account?</span>
          <button> Login </button>
        </div>
      </div>
    </div>
  );
};
