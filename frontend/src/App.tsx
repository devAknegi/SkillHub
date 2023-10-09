// App.tsx

import Landing from "./Components/Landing";
import Nav from "./Components/Nav";



function App() {
  

  return (
    <>
      <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
        <Nav />
        <Landing />
      </div>
    </>
  );
}

export default App;
