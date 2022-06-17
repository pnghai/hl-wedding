import * as React from "react";
import { Container, SmallTitle, Subtitle } from "../../utils/styles";

export default function Gallery(){
  return(
    <section id="gallery" className=" py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Gallery</SmallTitle>
          <Subtitle>Our memories</Subtitle>
        </div>
      </Container>
    </section>
  )
}