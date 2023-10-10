import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import FeaturePage from "./Components/FeaturePage";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
        <Nav />
        <Landing />
        <FeaturePage />
      </div>
    </>
  );
}

export default App;


