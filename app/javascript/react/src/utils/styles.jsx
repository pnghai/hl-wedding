import tw from "tailwind-styled-components";

const MainScreen = tw.main`h-screen overflow-hidden relative`;
const Aside = tw.aside`fixed top-0 left-0 md:translate-x-0 float-left w-[270px] md:w-[30%] xl:w-[22%] h-screen px-2 py-10 md:px-8 md:py-16 overflow-y-scroll bg-[#f6f1f0] flex-col flex align-items-center text-center transition-all duration-500`;
const Container = tw.div`container px-8 md:px-16 lg:px-32`;
const Avatar =tw.div`rounded-full w-36 h-36 overflow-hidden mx-auto`;
const StoryP = tw.p`font-nunito-sans mb-5 text-gray-400 leading-7 text-[15px]`;
const StoryLi = tw.li`font-nunito-sans mb-5 text-gray-400 leading-7 text-[15px]`;
const Main = tw.div`md:translate-x-0 h-screen float-right duration-500 transition-all ease-in-out w-full md:w-[70%] xl:w-[78%] overflow-scroll`;
const Blur = tw.div`bg-twine-800/35 absolute h-screen left-0 top-0 duration-500 transition-all ease-in-out w-full md:hidden`;
const SocialLink = tw.a`btn btn-sm btn-circle btn-outline btn-primary transition-all ease-in-out duration-500`;
const SmallTitle = tw.span`font-alex text-3xl text-twine leading-10 mb-4`
const Subtitle = tw.h2`font-garamond text-3xl tracking-wide uppercase`
const NavToggler = tw.a`z-50 fixed left-0 top-0 transition-all duration-500 bg-twine rounded-full py-3 px-3 my-3.5 mx-7 md:opacity-0 transition-all duration-500`
const A = tw.a`font-garamond text-lg leading-loose  tracking-wider duration-300 transition-all ease-in-out border-b border-transparent hover:border-twine hover:duration-500`
const A2 = tw.a`duration-300 transition-all ease-in-out border-b border-transparent hover:border-twine hover:duration-500`
export {
  MainScreen,
  Blur,
  Aside,
  Main,
  NavToggler,
  Avatar,
  Container,
  SocialLink,
  SmallTitle,
  Subtitle,
  StoryP,
  StoryLi,
  A,
  A2,
}