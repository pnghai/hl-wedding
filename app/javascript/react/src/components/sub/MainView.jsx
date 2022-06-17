import * as React from "react";
import Countdown from "react-countdown";

import Header from "./Header";
import Couples from "./Couple";
import Story from "./Story";
import Footer from "./Footer";
import Rsvp from "./Rsvp";
import LookingFw from "./LookingFw";
import Questions from "./Questions";
import Organization from "./Organization";
import Friends from "./Friends";
import { Main } from "../../utils/styles";
import Gallery from "./Gallery";

export default function MainView(){
  return(
    <Main>
      <Header/>
      <Couples/>
      <Countdown/>
      <Story/>
      <Friends/>
      <LookingFw/>
      <Organization/>
      <Gallery/>
      <Questions/>
      <Rsvp/>
      <Footer/>
    </Main>
  )
}