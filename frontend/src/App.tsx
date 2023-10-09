import Nav from "./Components/Nav";
import Landing from "./Components/Landing";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
        <Nav />
        <Landing/>
      </div>
    </>
  );
}

export default App;
