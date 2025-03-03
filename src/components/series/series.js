import React from "react";
import "./series.css";
import { Header } from "../../components/header/header";
import SeriesBanner from "../../assets/img/series-banner.webp";
import RomanticBanner from "../../assets/img/romantic-banner.webp";
import WalkoutBanner from "../../assets/img/walkout-banner.webp";
import { FooterCenterArea } from "../../components/footerCenterArea/footerCenterArea";
import { HorrorMovies } from "../horrormovies/horrormovies";
import { RomanticMovies } from "../romanticmovies/romanticmovies";
import { ComedyMovies } from "../comedymovies/comedymovies";
import {StremeoCardCarousel} from "../../components/cardCarousel/card"

export const Series = () => {
  return (
    <div className="series-layout">
      <Header />
      <img src={SeriesBanner} className="image-banner"/>
      <StremeoCardCarousel />
      <img src={RomanticBanner} className="image-banner"/>
      <StremeoCardCarousel />
      <img src={WalkoutBanner} className="image-banner"/>
      <StremeoCardCarousel />
    </div>
  );
};
