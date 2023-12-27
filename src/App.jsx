/************************
* File Name: App.jsx 	  *
* Author: Ammar S.A.A 	*
* Output: Routes        *
************************/

import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Categories";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoryPage from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/404";
import { LoginContext } from "./Context/Login-Context/login-context";
import AdminHome from "./pages/admin/Home";
import Category from "./pages/admin/Category";
import Users from "./pages/admin/Users";
import Order from "./pages/admin/Order";
import Course from "./pages/admin/Course";
import axios from "axios";

export const SERVER = "/";

export default function App() {
  const { state } = useContext(LoginContext);
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      {/* Common NavigationMenu for all routes */}
      <NavigationMenu />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/category/:categoryName" element={<CategoryPage />} />
        <Route path="/course/" element={<CoursePage />} />
        {state.userRole === "user" ? (
          <>
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </>
        ) : state.userRole === "admin" ? (
          <>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/course" element={<Course />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </>
        ) : (
          <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>

      {/* Common Footer for all routes */}
      <Footer />
    </>
  );
}
