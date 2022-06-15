import * as React from "react";
import { useTimeout } from 'react-use';
import tw from "tailwind-styled-components";
import { format } from 'date-fns';
import Loading from "./Loading";
import { olive } from '../../../assets'
import Menu from "./sub/Menu";
import MainView from "./sub/MainView";
import { MARRIAGE_DATE } from "../utils/config";
const Container = tw.main`h-screen overflow-hidden relative`;
const Aside = tw.aside`float-left w-[30%] xl:w-[22%] h-screen py-16 px-8 overflow-y-scroll bg-[#f6f1f0] flex-col flex align-items-center text-center`;
function Dashboard(){
  return (
    <Container>
      <Aside>
        <div>
          <div>
            <img src={olive} alt="wedding symbol" className="h-8 mx-auto"/>
          </div>
          <p className="font-alex text-twine text-3xl leading-loose">Mỹ Linh & Nguyễn Hải</p>
          <h6 className="font-nunito-sans text-xs tracking-[5px] mb-1.5">
            {format(MARRIAGE_DATE, "dd.MM.yyyy 'DL'")}
            <br/>
            (20-10-2022 Â.L)
          </h6>
        </div>
        <Menu/>
        <div className="mt-auto font-nunito-sans text-sm text-zinc-400 tracking-wider">
          <div className="w-16 h-px bg-[#bd945a66] w-16 mx-auto my-1.5"/>
          <small className="text-center">
            Hai & Linh Wedding
            <br/>2022, HCMC
          </small>
        </div>
      </Aside>
      <MainView/>
    </Container>
  )
}

function LoadStuff(){
  const ms = 2000;
  const [isReady,] = useTimeout(ms);

  return (
    <div>
      { isReady() ? <Dashboard/> : <Loading/> }
    </div>
  );
}

export default function App() {
  return (
    <React.Suspense fallback={<Loading/>}>
      <LoadStuff/>
    </React.Suspense>
  )
}