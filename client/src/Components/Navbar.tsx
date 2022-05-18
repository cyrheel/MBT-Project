import React from "react";
import { useNavigate } from "react-router-dom";

import defaultPP from "../statics/DefaultPP.png";
import { Container } from "../Styles/NavBarStyle";

function Navbar(): JSX.Element {
  let navigate = useNavigate();

  return (
    <Container>
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
      <img
        src={defaultPP}
        alt="PP"
        onClick={() => navigate("/userparam", { replace: true })}
      />
    </Container>
  );
}

export default Navbar;
