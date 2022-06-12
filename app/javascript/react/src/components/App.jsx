import * as React from "react";
import { useTimeout } from 'react-use';
import tw from "tailwind-styled-components";
import Loading from "./Loading";

const Container = tw.main`w-full overflow-hidden relative`;
const Aside = tw.aside`fixed top-0 left-0 w-1/5 py-16 px-8 overflow-y-scroll bg-[#f6f1f0]`;
const Main = tw.div`float-right duration-500 transition-all ease-in-out w-4/5`;

function Dashboard(){
  return (
    <Container>
      <Aside>
        nav heer
      </Aside>
      <Main>
        main
      </Main>
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