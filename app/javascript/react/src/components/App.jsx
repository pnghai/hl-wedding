import * as React from "react";
import { useTimeout } from 'react-use';
import Loading from "./Loading";
import MainView from "./sub/MainView";
import Sidebar from "./sub/Sidebar";
import { MainScreen, NavToggler } from "../utils/styles";
import { IoCloseOutline, IoMenuOutline } from "react-icons/all";
import { useState } from "react";
function Dashboard(){
  const [opened, setOpened] = useState(false);
  const toggleMenu = (e)=>{
    setOpened(!opened);
    e.preventDefault();
  }
  return (
    <MainScreen>
      <Sidebar className={opened ? `translate-x-0` :`-translate-x-[270px]`}/>
      <MainView className={ opened ? `translate-x-[270px]` : `` }/>
      <NavToggler className={ opened ? `translate-x-[270px]` : `` } href="#" onClick={toggleMenu}>
        {opened ?
          <IoCloseOutline color="#fff" size="25px"/> : <IoMenuOutline color="#fff" size="25px"/>
        }
      </NavToggler>
    </MainScreen>
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