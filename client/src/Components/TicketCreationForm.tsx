import React, { useState } from "react";
import {
  formContainerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
} from "../Styles/style";

function TicketCreationForm() {
  // Helpers
  // let today = new Date(Date.now()).toISOString();
  // today = today.slice(0, 10);

  // State
  const [tskName, setName] = useState<string>("");
  const [tskStatus, setStatus] = useState<string>("");
  const [tskLabels, setLabels] = useState<string>("");
  const [tskProject, setProject] = useState<string>(""); // Gonna be Int when db ready
  const [tskMembers, setMembers] = useState<string>("");
  const [tskDifficulty, setDifficulty] = useState<number>(1);
  const [tskUrgence, setUrgence] = useState<number>(1);
  const [tskDesc, setDesc] = useState<string>("");
  //TODO: view for mockup and DBmodel for time management

  // Funcs
  const HandleNameChanges = (e: any): void => {
    setName(e.target.value);
  };

  const HandleStatusChanges = (e: any): void => {
    setStatus(e.target.value);
  };

  const HandleLabelsChanges = (e: any): void => {
    setLabels(e.target.value);
  };

  const HandleProjectChanges = (e: any): void => {
    setProject(e.target.value);
  };

  const HandleMembersChanges = (e: any): void => {
    setMembers(e.target.value);
  };

  const HandleDifficultyChanges = (e: any): void => {
    setDifficulty(e.target.value);
  };

  const HandleUrgenceChanges = (e: any): void => {
    setUrgence(e.target.value);
  };

  const HandleDescChanges = (e: any): void => {
    setDesc(e.target.value);
  };

  const btnCreateClicked = (): void => {
    const newTicket = {
      title: tskName,
      description: tskDesc,
      estimated_time: 0,
      spent_time: 0,
      status: tskStatus,
      labels: tskLabels,
      priority: tskUrgence,
      difficulty: tskDifficulty,
      // project: Type projet
      projectId: tskProject,
      ticket_comment: [],
      ticket_user: tskMembers,
    };
    //TODO: Handle Ticket Creation Here (send newTicket w/ GQL to Db)
  };

  // Render
  return (
    <div {...formContainerStyle}>
      <div id="left" className="flex flex-col w-1/3 items-center">
        <div {...inputContainerStyle}>
          <label htmlFor="tskName" {...labelStyle}>
            Name :
          </label>
          <input
            className="w-full bg-gray-200 text-gray-700 border rounded py-2 leading-tight focus:outline-none focus:bg-white"
            id="tskName"
            type="text"
            value={tskName}
            onChange={(e: any) => HandleNameChanges(e)}
          ></input>
        </div>
        <div className="flex flex-col w-full p-4">
          <label htmlFor="tskstatus">Status :</label>
          <input
            className="w-full bg-gray-200 text-gray-700 border rounded py-2 leading-tight focus:outline-none focus:bg-white"
            id="tskstatus"
            type="text"
            value={tskStatus}
            onChange={(e: any) => HandleStatusChanges(e)}
          ></input>
        </div>
        <div className="flex flex-col w-full p-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="tsklabels"
          >
            Labels:
          </label>
          <input
            className="w-full bg-gray-200 text-gray-700 border rounded py-2 leading-tight focus:outline-none focus:bg-white"
            id="tsklabels"
            type="text"
            value={tskLabels}
            onChange={(e: any) => HandleLabelsChanges(e)}
          ></input>
        </div>
      </div>
      <div id="middle" className="flex flex-col w-1/3 items-center">
        <div className="flex flex-col w-full p-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="tskProject"
          >
            Select Project
          </label>
          <select
            id="tskProject"
            onChange={(e: any) => HandleProjectChanges(e)}
          >
            <option value="proj1">Projet A</option>
            <option value="proj2">Projet B</option>
            <option value="showmore">show more...</option>
          </select>
        </div>
        <div className="flex flex-col w-full p-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="tskMembers"
          >
            Select Members
          </label>
          <select
            id="tskMembers"
            onChange={(e: any) => HandleMembersChanges(e)}
          >
            <option value="wip">A voir pour mettre de vrais user ?</option>
            <option value="wip2">ça serait cool d'avoir leur pp aussi</option>
            <option value="wip3">trkl c'est du detail</option>
          </select>
        </div>
        <div id="difficultyRadio" className="flex flex-col w-full p-4">
          <h5>Select Difficulty</h5>
          <div className="flex w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dif1"
            >
              1
            </label>
            <input
              id="dif1"
              type="radio"
              name="difficulty"
              value={1}
              onChange={(e: any) => HandleDifficultyChanges(e)}
            ></input>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dif2"
            >
              2
            </label>
            <input
              id="dif2"
              type="radio"
              name="difficulty"
              value={2}
              onChange={(e: any) => HandleDifficultyChanges(e)}
            ></input>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dif3"
            >
              3
            </label>
            <input
              id="dif3"
              type="radio"
              name="difficulty"
              value={3}
              onChange={(e: any) => HandleDifficultyChanges(e)}
            ></input>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dif4"
            >
              4
            </label>
            <input
              id="dif4"
              type="radio"
              name="difficulty"
              value={4}
              onChange={(e: any) => HandleDifficultyChanges(e)}
            ></input>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dif5"
            >
              5
            </label>
            <input
              id="dif5"
              type="radio"
              name="difficulty"
              value={5}
              onChange={(e: any) => HandleDifficultyChanges(e)}
            ></input>
          </div>
        </div>
        <div id="urgenceRadio" className="flex">
          <h5>Select Urgence</h5>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="urg1"
          >
            1
          </label>
          <input
            id="urg1"
            type="radio"
            name="urgence"
            value={1}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="urg2"
          >
            2
          </label>
          <input
            id="urg2"
            type="radio"
            name="urgence"
            value={2}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="urg3"
          >
            3
          </label>
          <input
            id="urg3"
            type="radio"
            name="urgence"
            value={3}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="urg4"
          >
            4
          </label>
          <input
            id="urg4"
            type="radio"
            name="urgence"
            value={4}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="urg5"
          >
            5
          </label>
          <input
            id="urg5"
            type="radio"
            name="urgence"
            value={5}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
        </div>
        {/*
          TODO: add time management (maybe?)
        */}
      </div>
      <div id="right" className="flex flex-col w-1/3 items-center">
        <div className="flex flex-col w-full p-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="tckDesc"
          >
            Description :
          </label>
          <textarea
            className="w-full bg-gray-200 text-gray-700 border rounded py-2 leading-tight focus:outline-none focus:bg-white"
            id="tckDesc"
            value={tskDesc}
            onChange={(e: any) => HandleDescChanges(e)}
          ></textarea>
        </div>

        <button onClick={() => btnCreateClicked()}>Create !</button>
      </div>
    </div>
  );
}

export default TicketCreationForm;
