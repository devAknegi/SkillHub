import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./SidebarOptions/Dashboard";
import Sidebar from "./Sidebar";
import Projects from "./SidebarOptions/Projects";
import Messages from "./SidebarOptions/Messages";
import Community from "./SidebarOptions/Community";

interface AuthenticatedAppProps {
  isVisible: boolean;
}

const AuthenticatedApp: React.FC<AuthenticatedAppProps> = ({ isVisible }) => {
  return (
    <div className='flex min-h-screen w-full fixed mt-16'>
      {isVisible && <Sidebar sidebarVisible={isVisible} />}
      <div
        className='flex-1 transition-all duration-300'
      >
        <Routes>
          <Route path='home' element={<Navigate to='/' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='projects' element={<Projects />} />
          <Route path='messages' element={<Messages sidebarVisible={isVisible} />} />
          <Route path='community' element={<Community />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
