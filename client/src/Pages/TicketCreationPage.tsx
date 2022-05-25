import React from "react";
import Navbar from "../Components/Navbar";
import TicketCreationForm from "../Components/TicketCreationForm";

function TicketCreationPage(): JSX.Element {
  return (
    <div className="flex flex-col w-full h-screen bg-slate-100">
      <Navbar />
      <h2 className="flex items-center justify-center mb-2 font-medium leading-tight text-4xl text-blue-600">
        Create Task
      </h2>
      <TicketCreationForm />
    </div>
  );
}

export default TicketCreationPage;
