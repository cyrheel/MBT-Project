import React from "react";
import { useNavigate } from "react-router-dom";

import defaultPP from "../Statics/DefaultPP.svg";
import logo from "../Statics/Capture52.svg";

function Navbar(): JSX.Element {
  let navigate = useNavigate();

  return (
    <nav className="flex items-center justify-around leading-tight h-20">
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/", { replace: true })}
      />
      <button
        className="font-semibold text-xl"
        onClick={() => navigate("/projetList", { replace: true })}
      >
        Projects
      </button>
      <button
        className="font-semibold text-xl"
        onClick={() => navigate("/login", { replace: true })}
      >
        Login
      </button>
      <button
        className="font-semibold text-xl"
        onClick={() => navigate("/register", { replace: true })}
      >
        Register
      </button>
      <img
        className="default-pp h-12"
        src={defaultPP}
        alt="PP"
        onClick={() => navigate("/userparam", { replace: true })}
      />
    </nav>
  );
}

export default Navbar;
