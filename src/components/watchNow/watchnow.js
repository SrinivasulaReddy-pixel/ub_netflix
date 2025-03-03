import React, {useEffect} from "react";
import "./watchnow.css";
import { Header } from "../../components/header/header";
import Image from "../../assets/img/romantic-banner.webp";
import { StremeoCardCarousel } from "../../components/cardCarousel/card";
import { FooterCenterArea } from "../footerCenterArea/footerCenterArea";
import YouTube from "react-youtube";

export const WatchNow = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component loads
      }, []);
    const TrailerPlayer = ({ videoId }) => {
        const opts = {
          
          playerVars: {
            autoplay: 1, // Auto-play the video
          },
        };
      
        return <YouTube videoId={videoId} className="movie-section" />;
      };
  return (
    <div className="watchnow-layout">
      <Header />
      <div className="row watchnow-headline">
        <div className="col-6 watchnow-headline-col1">Walkout </div>
        <div className="col-6 watchnow-headline-col2">| 1 hr 43 min | HD </div>
      </div>
      <div className="container watchnow-body">
        {/* <img src={Image} className="watchnow-video" /> */}
        <TrailerPlayer videoId="4u1UqHQi9go"  className="movie-section"/>
        <p>Date: 20-Jan-1997 </p>
        <p>
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
        </p>
        <p>
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
        </p>
        <p>
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
        </p>
      </div>
      <StremeoCardCarousel />
      <FooterCenterArea />
    </div>
  );
};
