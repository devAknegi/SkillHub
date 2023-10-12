import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function Profile() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      {/* Other nested routes if needed */}
    </Routes>
  );
}

export default Profile;
