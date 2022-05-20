import React from "react";
import Navbar from "../Components/Navbar";
import TicketCreationForm from "../Components/TicketCreationForm";

function TicketCreationPage(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Create Task
      </h2>
      <TicketCreationForm />
    </div>
  );
}

export default TicketCreationPage;
