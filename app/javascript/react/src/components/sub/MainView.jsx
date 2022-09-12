import * as React from "react";
import Countdown from "react-countdown";

import Header from "./Header";
import Couples from "./Couple";
import Story from "./Story";
import Footer from "./Footer";
import Rsvp from "./Rsvp";
import LookingFw from "./LookingFw";
import Organization from "./Organization";
import { Main } from "../../utils/styles";
import Gallery from "./Gallery";
export default function MainView({ className }){
  return(
    <Main className={className}>
      <Header/>
      <Couples/>
      <Countdown/>
      <Story/>
      {/*<Friends/>*/}
      <Gallery/>
      <LookingFw/>
      <Organization/>
      {/*<Questions/>*/}
      <Rsvp/>
      <Footer/>
    </Main>
  )
}