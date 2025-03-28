import React,{useState} from "react";  
import "./header.css";
import Logo from "../../assets/img/footer-stremo.webp";
import Profile from "../../assets/img/header-profile.webp";
import { useNavigate } from 'react-router-dom';
import { Notification } from "../notification/notification";
import { Search } from "../search/search";
import { Home } from "../home/home";
import { Series } from "../series/series";

export const Header = () => {

  const[showDropDown,setShowDropDown]=useState(false);
   const navigate = useNavigate();
  
    const handleProfile = () => {
      navigate('/Profile'); // Navigate to the Register page
    };

    const handleHome=()=>{
      navigate('/')
    }

    const handleSeries=()=>{
      navigate('/Series')
    }
  return (
    <div className="header-layout">
      <div className="row header-layout-row1">
        <div className="col-lg-9  col-3 header-layout-row1-col1">
        <span><img src={Logo} /></span>
        <span className="header-layout-row1-col1-home header-nav-option" onClick={(e)=>{e.preventDefault();handleHome()}}>Home</span>
        <span  className="header-nav-option" onClick={(e)=>{e.preventDefault();handleSeries()}}>Series</span>
        </div>
        <div className="col-lg-3 col-9 header-layout-row1-col2">
          <Search/>
          <Notification/>
          <span onClick={(e)=>{e.preventDefault();setShowDropDown(!showDropDown)}}><img src={Profile} className="header-layout-row1-col2-image"/></span>
         { showDropDown && <div className="header-profile-dropdown">
            <ul>
              <li onClick={(e)=>{e.preventDefault();handleProfile()}}>My Profile</li>
              <li>My Account</li>
              <li>Logout</li>
            </ul>
          </div>}
          <span className="header-subscribe-now-button"><button>Subscribe Now</button></span>
        </div>
      </div>
    </div>
  );
};
