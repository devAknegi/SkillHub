import Nav from "./Components/primarycomponents/Nav";
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


// import Nav from "./Components/Nav";
// import { Outlet, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './Components/userdata/Dashboard';
// import Layout from './Components/lib/Layout';
// import Profile from './Components/userdata/Profile';
// function App() {
//   return (
//     <>
//       <div className="min-h-screen w-screen bg-bgdark scroll-smooth relative">
//         <Nav />
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<Dashboard />} />
//               <Route path="profile" element={<Profile />} /> {/* Use the Profile component as a route */}
//             </Route>
//           </Routes>
//         </Router>
//         <div id="outlet">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// } 

// export default App;



