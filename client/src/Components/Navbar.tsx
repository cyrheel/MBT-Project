import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(): JSX.Element {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/", { replace: true })}>Home</button>
      <button onClick={() => navigate("/projetList", { replace: true })}>
        Projects
      </button>
      <button onClick={() => navigate("/login", { replace: true })}>
        Login
      </button>
      <button onClick={() => navigate("/register", { replace: true })}>
        Register
      </button>
    </div>
  );
}

export default Navbar;
