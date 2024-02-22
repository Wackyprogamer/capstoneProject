import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export const ReactRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Login}></Route>
      <Route path="/LogIn" exact Component={Login}></Route>
      <Route path="/SignUp" exact Component={Signup}></Route>
    </Routes>
  );
};
