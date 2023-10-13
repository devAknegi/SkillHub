import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function Profile() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
}

export default Profile;
