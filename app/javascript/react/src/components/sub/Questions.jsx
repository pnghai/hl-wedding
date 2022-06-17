import * as React from "react";
import { Container } from "../../utils/styles";

export default function Questions(){
  return(
    <section id="event" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <span className="font-alex text-3xl text-twine leading-7 mb-4">Questions</span>
          <h2 className="font-garamond text-3xl tracking-wide uppercase">When & Where</h2>
        </div>
      </Container>
    </section>
  )
}