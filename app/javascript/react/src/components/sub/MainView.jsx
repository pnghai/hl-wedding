import * as React from "react";
import tw from "tailwind-styled-components";
import Countdown from "react-countdown";
import { format } from "date-fns";
const Main = tw.div`h-screen float-right duration-500 transition-all ease-in-out w-[70%] xl:w-[78%] overflow-scroll`;
import { couple, dots, rings } from "../../../../assets";
import {
  BsHeart,
  GiClover, TbBrandInstagram,
  TbBrandTwitter,
  TiSocialFacebook
} from "react-icons/all";
import { MARRIAGE_DATE } from "../../utils/config";
const Avatar=tw.div`xl:shrink-0 rounded-full basis-36 h-36 overflow-hidden mx-auto`;
const SocialLink = tw.a`btn btn-sm btn-circle btn-outline btn-primary transition-all ease-in-out duration-500`;
const StoryP = tw.p`font-nunito-sans mb-5 text-gray-400 leading-7 text-[15px]`;
const Container = tw.div`container px-8 md:px-16 lg:px-32`;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<p>Save the date</p>);
  } else {
    // Render a countdown
    return (
      <ul className="font-nunito-sans uppercase tracking-wider leading-[3em]">
        <li className="p-4 inline-block"><span id="days" className="block text-6xl tracking-tighter">{days}</span>Days</li>
        <li className="p-4 inline-block"><span id="hours" className="block text-6xl tracking-tighter">{hours}</span>Hours</li>
        <li className="p-4 inline-block "><span id="minutes" className="block text-6xl tracking-tighter">{minutes}</span>Minutes</li>
        <li className="p-4 inline-block"><span id="seconds" className="block text-6xl tracking-tighter">{seconds}</span>Seconds</li>
      </ul>
    );
  }
};
export default function MainView(){
  return(
    <Main>
      <header id="home" className="relative min-h-screen overflow-hidden flex items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${couple})`}}>
        <div className="container px-8 lg:px-16">
          <h1 className="font-alex text-8xl text-white mx-auto text-center">
            Mỹ Linh
            <img src={rings} className="inline w-10 mx-5"/>
            Nguyễn Hải
          </h1>
        </div>
        <div className="absolute bottom-12 left-1/2">
          <a href="#couple">
            <GiClover color="#4aa314" size="28px"/>
          </a>
        </div>
      </header>
      <section className="bg-hint-of-red py-24" id="couple">
        <Container>
          <div className="grid gap-8 grid-cols-1 md:gap-4 md:grid-cols-2 mb-16">
            <div className="p-8 bg-white flex flex-col xl:flex-row-reverse">
              <Avatar className="mb-8 xl:mb-0 xl:ml-6">
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/bride.jpg" alt="bride"/>
              </Avatar>
              <div className="text-center xl:text-right">
                <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-end">
                  Đào Mỹ Linh
                  <span className="ml-2"><BsHeart color="#BD945A" size="16px"/></span>
                </div>
                <span className="font-alex text-2xl text-twine mt-1 mb-3">Trưởng nữ</span>
                <p>Olivia fringilla dui at elit finibus viverra nec a lacus seda themo the miss druane semper sollicitudin non the fermen.</p>
                <div className="mt-4">
                  <SocialLink href="https://www.facebook.com/" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>
                  <SocialLink href="http://twitter.com/" className="mr-2"> <TbBrandTwitter size="18px"/> </SocialLink>
                  <SocialLink href="https://www.instagram.com/"> <TbBrandInstagram size="18px"/> </SocialLink>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white flex flex-col xl:flex-row">
              <Avatar className="mb-8 xl:mb-0 xl:mr-6">
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/bride.jpg" alt="bride"/>
              </Avatar>
              <div className="text-center xl:text-left">
                <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-start">
                  <span className="mr-2"><BsHeart color="#BD945A" size="16px"/></span>
                  Phan Nguyễn Hải
                </div>
                <span className="font-alex text-2xl text-twine mt-1 mb-3">Trưởng nam</span>
                <p>Olivia fringilla dui at elit finibus viverra nec a lacus seda themo the miss druane semper sollicitudin non the fermen.</p>
                <div className="mt-4">
                  <SocialLink href="https://www.facebook.com/" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>
                  <SocialLink href="http://twitter.com/" className="mr-2"> <TbBrandTwitter size="18px"/> </SocialLink>
                  <SocialLink href="https://www.instagram.com/"> <TbBrandInstagram size="18px"/> </SocialLink>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-twine text-6xl font-alex">
              Are getting married!
            </h3>
            <h4 className="text-lg font-garamond">
              December 15, 2021 — New York, Brooklyn
            </h4>
          </div>
        </Container>
      </section>
      <section id="count-down">
        <div className="py-24 bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-1.jpg)`}}>
          <div className="container px-8 lg:px-16">
            <div className="text-center text-white">
              <h4 className="font-alex text-6xl mb-4">We will become a family in</h4>
              <Countdown date={MARRIAGE_DATE} renderer={renderer}/>
            </div>
          </div>
        </div>
      </section>
      <section id="story" className=" py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="relative md:mb-8">
                <div className="z-0 w-[90%] absolute top-[-18%] bottom-[-25%] left-0 bg-repeat" style={{ backgroundImage: `url(${dots})`}}/>
                <div className="pb-7 pr-7 pl-4 relative">
                  <div className="z-10 absolute top-8 right-0 left-11 bottom-0 border-8 border-twine border-solid"/>
                  <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/story.jpg" className="relative z-20 max-w-full"/>
                </div>
                <div className="z-30 w-[30%] h-[120px] absolute top-[15px] right-[45px] bg-cover bg-no-repeat bg-center animate-[spin_12s_infinite_linear]" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/wedding-logo.png)` }} />
              </div>
            </div>
            <div className="md:col-span-7">
              <h4 className="font-alex text-3xl text-twine mb-2.5">Our love.</h4>
              <h3 className="tracking-wide mb-5 font-garamond font-medium uppercase text-3xl">Our Story</h3>
              <StoryP>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida
                aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat
                themo the druanye semper.</StoryP>
              <StoryP>Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi
                suscipit non sagie the fermen.</StoryP>
              <StoryP>Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at
                elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci
                elit genes tristique.</StoryP>
              <h4 className="font-garamond mb-5 font-medium text-2xl leading-5">Dec 5th, 2021, We Said Yes!</h4>
              <StoryP>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi
                suscipit non sagie the fermen.</StoryP>
            </div>
          </div>
        </Container>
      </section>
      <section id="friends" className="bg-hint-of-red py-24">
        <Container>
          <div className="mb-8">
            <span className="font-alex text-5xl text-twine leading-7 mb-4">Our best friends ever</span>
            <h2 className="font-garamond text-7xl tracking-wide uppercase">Thanks for being there</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item cloned">
                      <div className="item">
                        <div className="img"><img
                          src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg" alt=""/></div>
                        <div className="info valign">
                          <div className="full-width">
                            <h6>Matthew Brown</h6>
                            <span>Groomsmen</span>
                            <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned">
                      <div className="item">
                        <div className="img"><img
                          src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/b3.jpg" alt=""/></div>
                        <div className="info valign">
                          <div className="full-width">
                            <h6>Fredia Halle</h6>
                            <span>Bridesmaids</span>
                            <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned">
                      <div className="item">
                        <div className="img"><img
                          src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w3.jpg" alt=""/></div>
                        <div className="info valign">
                          <div className="full-width">
                            <h6>Pablo Dante</h6>
                            <span>Groomsmen</span>
                            <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">prev</div>
                  <div className="owl-next">next</div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active"><span></span></div>
                  <div className="owl-dot"><span></span></div>
                  <div className="owl-dot"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="looking-fw">
        <div className="py-24 bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-3.jpg)`}}>
          <div className="container px-8 lg:px-16">
            <div className="text-center text-white">
              <div className="inline-block">
                <BsHeart color="#fff" size="30px"/>
              </div>
              <h4 className="font-alex text-6xl mb-4">Looking forward to see you!</h4>
              <h3 className="font-nunito-sans text-5xl leading-[1em]">
                {format(MARRIAGE_DATE, "dd.MM.yyyy")}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}