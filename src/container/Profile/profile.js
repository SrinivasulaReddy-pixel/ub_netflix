import React from 'react'
import { Header } from '../../components/header/header'
import { FooterCenterArea } from '../../components/footerCenterArea/footerCenterArea'
import { LoginAndRegister } from '../../components/LoginAndRegister/loginAndRegister'
import { ProfileHeading } from '../../components/profileheading/profileheading'
import { ProfileDetails } from '../../components/profiledetails/profiledetails'

export const Profile=()=>{
    return(
        <div>
            <Header/>
            <ProfileHeading/>
            <ProfileDetails/>
            <FooterCenterArea/>
        </div>
    )
}