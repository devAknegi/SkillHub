import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
        <Nav/>
        <div id="outlet">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;


