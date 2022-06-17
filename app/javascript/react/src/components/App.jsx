import * as React from "react";
import { useTimeout } from 'react-use';
import Loading from "./Loading";
import MainView from "./sub/MainView";
import Sidebar from "./sub/Sidebar";
import { MainScreen } from "../utils/styles";
function Dashboard(){
  return (
    <MainScreen>
      <Sidebar/>
      <MainView/>
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