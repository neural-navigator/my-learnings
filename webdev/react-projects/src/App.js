// import SubscribeManage from "./components/SubscribeManage";
// import Counter from "./components/Counter";
// import ColorPallete from "./components/ColorPallete";
// import PropImplement from "./components/PropImplement";
import { PureComponent } from "react";
import ChildToParentProp from "./components/ChildToParentProp";
import Fragments from "./components/Fragments";
import LifeCycleA from "./components/LifeCycleA";
import ParentComponent from "./components/ParentComponent";
import RefComponent from "./components/RefComponent";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundry from "./ErrorBoundry";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import Counter3 from "./components/Counter3";

function App() {
  // const childPropHandler = (val) => console.log(`${val} printed in parent!`)
  return (
    <>
      {/* <Counter /> */}
      {/* <SubscribeManage /> */}
      {/* <ColorPallete /> */}
      {/* <PropImplement btn_color="#ff1111" name="Hello"/> */}
      {/* <ChildToParentProp printChildProp={childPropHandler} /> */}
      {/* <Fragments /> */}
      {/* <LifeCycleA /> */}
      {/* <PureComponent /> */}
      {/* <ParentComponent /> */}
      {/* <RefComponent /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Superman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 /> */}
      {/* <User render={(isLoggedIn)=> isLoggedIn? "Satya": "Guest"}/> */}
      <Counter3 render={(count, incrementCounter) => (
        <ClickCounter2 count={count} incrementCounter={incrementCounter} />
      )}/>
      <Counter3 render={(count, incrementCounter) => (
        <HoverCounter2 count={count} incrementCounter={incrementCounter} />
      )}/>
    </>
  );
}

export default App;
