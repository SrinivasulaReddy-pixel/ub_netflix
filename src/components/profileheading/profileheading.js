import React from 'react'
import "./profileheading.css"
import { useNavigate } from 'react-router-dom'

export const ProfileHeading=()=>{
    const navigate = useNavigate()

    const handleHome =()=>{
        navigate("/")
    }

    return(
        <div className='profile-heading-layout'>
            <span className='profile-heading-layout-myaccount'>My Account</span>
            <span onClick={(e)=>{e.preventDefault();handleHome()}} className='profile-heading-home'>Home</span>|
            <span className='profile-heading-myaccount'>My Account</span>
        </div>
    )
}