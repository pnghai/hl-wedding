import tw from "tailwind-styled-components";

const MainScreen = tw.main`h-screen overflow-hidden relative`;
const Aside = tw.aside`float-left w-[30%] xl:w-[22%] h-screen py-16 px-8 overflow-y-scroll bg-[#f6f1f0] flex-col flex align-items-center text-center`;
const Container = tw.div`container px-8 md:px-16 lg:px-32`;
const Avatar =tw.div`xl:shrink-0 rounded-full basis-36 h-36 overflow-hidden mx-auto`;
const StoryP = tw.p`font-nunito-sans mb-5 text-gray-400 leading-7 text-[15px]`;
const Main = tw.div`h-screen float-right duration-500 transition-all ease-in-out w-[70%] xl:w-[78%] overflow-scroll`;
const SocialLink = tw.a`btn btn-sm btn-circle btn-outline btn-primary transition-all ease-in-out duration-500`;
const SmallTitle = tw.span`font-alex text-3xl text-twine leading-10 mb-4`
const Subtitle = tw.h2`font-garamond text-3xl tracking-wide uppercase`
export {
  MainScreen,
  Aside,
  Main,
  Avatar,
  Container,
  SocialLink,
  SmallTitle,
  Subtitle,
  StoryP
}