import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";
import { useSelector } from "react-redux";

import ForgotPassword from "./auth/ForgotPassword";
import Home from "./home/Home";
import ResetPassword from "./auth/ResetPassword";
import Profile from "./profile/Profile";
import EditUser from "./profile/EditUser";
const Body = () => {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user/activate/:activation_token"
        element={<ActivationEmail />}
      />
      <Route
        path="/forgot_password"
        element={isLogged ? <NotFound /> : <ForgotPassword />}
      />
      <Route
        path="/user/reset/:token"
        element={isLogged ? <NotFound /> : <ResetPassword />}
        exact
      />
      <Route
        path="/profile"
        element={isLogged ? <Profile /> : <NotFound />}
        exact
      />
      <Route
        path="/edit_user/:id"
        element={isAdmin ? <EditUser /> : <NotFound />}
        exact
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Body;
