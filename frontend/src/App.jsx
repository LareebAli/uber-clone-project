import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainSignIn from "./pages/CaptainSignIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/captain-sign-up" element={<CaptainSignUp />} />
        <Route path="/captain-sign-in" element={<CaptainSignIn />} />
      </Routes>
    </div>
  );
};

export default App;
