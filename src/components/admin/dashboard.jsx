import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Users from './users'
import Posts from './posts'


const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar/>
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </div>
  );
};

export default Dashboard;
