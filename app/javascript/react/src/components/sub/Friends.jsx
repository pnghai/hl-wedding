import * as React from "react";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive:[
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};
const data= [
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
  {
    avatar: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg",
    name: "Pham Dinh Cat",
    role: "Phu re",
    desc: "Enstibulum eringilla dui athe elitene miss minibus viverra nectar.",
  },
];
export default function Friends(){
  return(
    <section id="friends" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Our best friends ever</SmallTitle>
          <Subtitle>Thanks for being there</Subtitle>
        </div>
        <div className="-mx-3">
          <Slider {...settings}>
            {data.map(({ avatar, name, role, desc }, key) => {
              return (
                <div className="px-3 mb-3" key={key}>
                  <div className="rounded-xl bg-white p-7 flex">
                    <div className="mr-7">
                      <div className="overflow-hidden rounded-full w-[140px] h-[140px]">
                        <img src={avatar} alt="" className="w-full"/>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <h6 className="text-2xl font-medium font-garamond leading-7">{name}</h6>
                      <p className="font-alex text-2xl mb-2 text-twine">{role}</p>
                      <StoryP>{desc}</StoryP>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  )
}