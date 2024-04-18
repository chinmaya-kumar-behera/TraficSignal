import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/auth/authSlice";
import { DashBoard, Login, PageNotFound, ProjectPage, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";
import AbsoluteComponent from "./views/absoluteComponent/AbsoluteComponent";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(storageData));
  }, [user?._id]);

  return (
    <main>
      <AbsoluteComponent/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user?._id ? <ProjectPage /> : <Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/project" element={user?._id ? <ProjectPage /> : <Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
