import { useState } from "react";
import MainSection from "./components/MainSection"
import SideNavbar from "./components/SideNavbar"
import TopNavbar from "./components/TopNavbar"
function App() {
  //state lifiting 
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState<boolean>(true);

  const toggleSideNavbar = () => {
    setIsSideNavbarVisible(!isSideNavbarVisible);
  };


  return (
    <>
      <div className="w-[100%] h-[100vh]">
        <TopNavbar toggleSideNavbar={toggleSideNavbar}/>
        <div className="h-[90%] w-full grid" style={{gridTemplateColumns:"1fr 4fr"}}>
          <SideNavbar isVisible={isSideNavbarVisible}/>
          <MainSection />
        </div>
      </div>
    </>
  )
}

export default App
