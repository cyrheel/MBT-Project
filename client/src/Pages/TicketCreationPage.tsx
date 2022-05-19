import React from "react";
import Navbar from "../Components/Navbar";
import TicketCreationForm from "../Components/TicketCreationForm";
import Form from "../Components/tempo";
import "../Styles/index.css";

function TicketCreationPage() {
  return (
    <div>
      <Navbar />
      <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Create Task
      </h2>
      <TicketCreationForm />
      <Form />
    </div>
  );
}

export default TicketCreationPage;
