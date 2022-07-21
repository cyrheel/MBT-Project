import React from "react";
import { useNavigate } from "react-router-dom";

import defaultPP from "../Statics/DefaultPP.svg";
import logo from "../Statics/Capture52.svg";

function Navbar(): JSX.Element {
  let navigate = useNavigate();

  return (
    <nav className="flex items-center justify-around leading-tight h-20 bg-sky-400">
      <img
        id="goHome"
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/", { replace: true })}
      />
      <button
        id="goProjects"
        className="font-semibold text-xl text-white font-bold"
        onClick={() => navigate("/projetList", { replace: true })}
      >
        Projects
      </button>
      <button
        id="goLogin"
        className="font-semibold text-xl text-white font-bold"
        onClick={() => navigate("/login", { replace: true })}
      >
        Login
      </button>
      <button
        id="goRegister"
        className="font-semibold text-xl text-white font-bold"
        onClick={() => navigate("/register", { replace: true })}
      >
        Register
      </button>
      <img
        id="goUserParams"
        className="default-pp h-12"
        src={defaultPP}
        alt="PP"
        onClick={() => navigate("/userparam", { replace: true })}
      />
    </nav>
  );
}

export default Navbar;
