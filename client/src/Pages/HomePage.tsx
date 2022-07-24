import React from 'react';
import Navbar from '../Components/Navbar';

function HomePage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <p>Home Page :)</p>
      <p>SI auth c'est un dashboard, si pas auth retourne vers '/login' </p>
    </div>
  );
}

export default HomePage;
