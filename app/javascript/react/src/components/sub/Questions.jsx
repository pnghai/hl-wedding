import * as React from "react";
import { Container, SmallTitle, Subtitle } from "../../utils/styles";

export default function Questions(){
  return(
    <section id="event" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Questions</SmallTitle>
          <Subtitle>When & Where</Subtitle>
        </div>
      </Container>
    </section>
  )
}