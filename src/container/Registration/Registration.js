import React from 'react';
import { LoginAndRegister } from '../../components/LoginAndRegister/loginAndRegister';
import { Header } from '../../components/header/header';
import { FooterCenterArea } from '../../components/footerCenterArea/footerCenterArea';

export const Registration=()=>{
    return(
        <div className="registration-layout">
            <div>
                <Header></Header>
                <LoginAndRegister/>
                <FooterCenterArea/>
            </div>
        </div>
    )
}