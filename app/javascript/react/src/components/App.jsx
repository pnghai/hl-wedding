import * as React from "react";
import { useTimeout } from 'react-use';
import Loading from "./Loading";
import MainView from "./sub/MainView";
import Sidebar from "./sub/Sidebar";
import { MainScreen, NavToggler } from "../utils/styles";
import { IoCloseOutline, IoMenuOutline } from "react-icons/all";
import { useContext } from "react";
import { Context } from "./store";
function Dashboard(){
  const [{ menuOpen }, dispatch] = useContext(Context);
  const toggleMenu = (e)=>{
    dispatch({ type: 'TOGGLE_MENU', value: !menuOpen});
    e.preventDefault();
  }
  return (
    <MainScreen>
      <Sidebar className={menuOpen ? `translate-x-0` :`-translate-x-[270px]`}/>
      <MainView className={ menuOpen ? `translate-x-[270px]` : `` }/>
      <NavToggler className={ menuOpen ? `translate-x-[270px]` : `` } href="#" onClick={toggleMenu}>
        {menuOpen ?
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