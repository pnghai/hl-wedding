import * as React from "react";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
const data = [
  {
    id: "01",
    title: "Ceremony",
    desc: "Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera."
  },
  {
    id: "02",
    title: "Lunch Time",
    desc: "Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera."
  },
  {
    id: "03",
    title: "Party",
    desc: "Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera."
  },
  {
    id: "04",
    title: "Lucky Flower?",
    desc: "Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera."
  },
]
export default function Organization(){
  return(
    <section id="organization" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Wedding</SmallTitle>
          <Subtitle>Organization</Subtitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 bg-cover bg-no-repeat border border-[#F6F1F0] divide divide-[#F6F1F0]" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2021/11/slider.jpg)`, }}>
          {data.map(({ id, title, desc}, key)=>(
            <div key={key} className="px-8 py-16 bg-white transition-all duration-500 hover:!text-white hover:bg-black/60">
              <h2 className="font-garamond font-medium leading-[1.25em] text-7xl text-transparent mb-4" style={{ WebkitTextStroke: '1px #BD945A', }}>{id}</h2>
              <h6 className="font-garamond uppercase text-xl mt-2.5 mb-4">{title}</h6>
              <StoryP>{desc}</StoryP>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}