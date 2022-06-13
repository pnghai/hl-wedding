import * as React from "react";
import tw from "tailwind-styled-components";
const Main = tw.div`h-screen float-right duration-500 transition-all ease-in-out w-[70%] xl:w-[78%] overflow-scroll`;
import { couple, rings } from "../../../../assets";
import {
  BsFacebook,
  BsHeart,
  BsInstagram,
  BsTwitter,
  GiClover, TbBrandInstagram,
  TbBrandTwitter,
  TiSocialFacebook
} from "react-icons/all";
const Avatar=tw.div`xl:shrink-0 rounded-full basis-36 h-36 overflow-hidden mx-auto`;
const SocialLink = tw.a`btn btn-sm btn-circle btn-outline btn-primary transition-all ease-in-out duration-500`;
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
      <section className="bg-[#faf8f7] py-24" id="couple">
        <div className="container px-8 md:px-16 lg:px-32">
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
        </div>
      </section>
      <section id="count-down">
        <div className="py-24 bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-1.jpg)`}}>
          <div className="container px-8 lg:px-16">
            <div className="text-center text-white">
              <h4 className="font-alex text-6xl mb-4">We will become a family in</h4>
              <ul className="font-nunito-sans uppercase tracking-wider leading-[3em]">
                <li className="p-4 inline-block"><span id="days" className="block text-6xl tracking-tighter">184</span>Days</li>
                <li className="p-4 inline-block"><span id="hours" className="block text-6xl tracking-tighter">9</span>Hours</li>
                <li className="p-4 inline-block "><span id="minutes" className="block text-6xl tracking-tighter">8</span>Minutes</li>
                <li className="p-4 inline-block"><span id="seconds" className="block text-6xl tracking-tighter">48</span>Seconds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}