import * as React from "react";
import Slider from 'react-slick';
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
import { BiDirections, MdOutlineDirections, IoLocationOutline, IoTimeOutline } from "react-icons/all";
import { useTranslation } from "react-i18next";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
      background: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/2-1.jpg",
      title: "Accomodations",
      address1: "Hotel and distance from wedding party restaurant:",
      address2: "The William Vale (7 min)",
      icon1: BiDirections,
      icon2: MdOutlineDirections,
    },
    {
      background: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/3-1.jpg",
      title: "Wedding Ceremony",
      icon1: IoLocationOutline,
      icon2: IoTimeOutline,
      address1: "175 Broadway, Brooklyn, New York 11244, USA",
      address2: "12:00am – 13:00pm",
    },
    {
      background: "https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/1-1.jpg",
      title: "Wedding Party",
      icon1: IoLocationOutline,
      icon2: IoTimeOutline,
      address1: "Fortune Brooklyn restaurant, 149 Broadway, Brooklyn, NY, USA",
      address2: "14:00pm",
    },
  ];
export default function Questions(){
  const { t } = useTranslation();
  return(
    <section id="event" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>{t("Questions")}</SmallTitle>
          <Subtitle>{t("When & Where")}</Subtitle>
        </div>
        <div className="-mx-3">
          <Slider {...settings}>
            {data.map(({ background, title, address1, address2, icon1, icon2}, key) => {
              const Ico1= icon1;
              const Ico2=icon2;
              return (
                <div className="px-3" key={key}>
                  <div className="w-full">
                    <img src={background} alt="" />
                  </div>
                  <div className="p-5 pb-6 bg-white">
                    <h5 className="text-xl font-medium font-garamond leading-7 mt-2.5 mb-6 uppercase">{t(title)}</h5>
                    <StoryP>
                      <span className="inline-block mr-2"><Ico1 color="#BD945A" /></span>
                      {address1}</StoryP>
                    <StoryP>
                      <span className="inline-block mr-2"><Ico2 color="#BD945A" /></span>
                      {address2}</StoryP>
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