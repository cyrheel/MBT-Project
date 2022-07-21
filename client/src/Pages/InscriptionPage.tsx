import React from "react";
import Navbar from "../Components/Navbar";
import InscriptionForm from "Components/InscriptionForm";
function InscriptionPage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">Sign Up</div>
      <div className="flex flex-row w-full">
        <div className="w-full h-screen flex items-center">
          <div className="p-5">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg"
              alt="Mountain"
            />
          </div>
          <InscriptionForm />
        </div>
        </div>
    </div>
  );
}

export default InscriptionPage;
