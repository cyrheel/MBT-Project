import React, { useState } from "react";
import {
  formContainerStyle,
  inputContainerStyle,
  radioInputContainerStyle,
  inputStyle,
  labelStyle,
  radioInputStyle,
} from "../Styles/style";

// custom the default styles of the card style
const cardStyle = {
  className:
    "flex flex-col w-1/4 h-3/4 bg-slate-200 items-center justify-evenly mt-2 border-4 border-solid border-blue-600 rounded-xl shadow-xl",
};

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
      <div id="left" {...cardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="tskName" {...labelStyle}>
            Name :
          </label>
          <input
            id="tskName"
            type="text"
            value={tskName}
            onChange={(e: any) => HandleNameChanges(e)}
            {...inputStyle}
          ></input>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="tskstatus" {...labelStyle}>
            Status :
          </label>
          <input
            id="tskstatus"
            type="text"
            value={tskStatus}
            onChange={(e: any) => HandleStatusChanges(e)}
            {...inputStyle}
          ></input>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="tsklabels" {...labelStyle}>
            Labels:
          </label>
          <input
            id="tsklabels"
            type="text"
            value={tskLabels}
            onChange={(e: any) => HandleLabelsChanges(e)}
            {...inputStyle}
          ></input>
        </div>
      </div>
      <div id="middle" {...cardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="tskProject" {...labelStyle}>
            Select Project
          </label>
          <select
            id="tskProject"
            onChange={(e: any) => HandleProjectChanges(e)}
            {...inputStyle}
          >
            <option value="proj1">Projet A</option>
            <option value="proj2">Projet B</option>
            <option value="showmore">show more...</option>
          </select>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="tskMembers" {...labelStyle}>
            Select Members
          </label>
          <select
            id="tskMembers"
            onChange={(e: any) => HandleMembersChanges(e)}
            {...inputStyle}
          >
            <option value="wip">A voir pour mettre de vrais user ?</option>
            <option value="wip2">ça serait cool d'avoir leur pp aussi</option>
            <option value="wip3">trkl c'est du detail</option>
          </select>
        </div>
        <div id="difficultyRadio" {...inputContainerStyle}>
          <h5 {...labelStyle}>Select Difficulty</h5>
          <div className="flex w-3/4">
            <div {...radioInputContainerStyle}>
              <label htmlFor="dif1" {...labelStyle}>
                1
              </label>
              <input
                id="dif1"
                type="radio"
                name="difficulty"
                value={1}
                onChange={(e: any) => HandleDifficultyChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="dif2" {...labelStyle}>
                2
              </label>
              <input
                id="dif2"
                type="radio"
                name="difficulty"
                value={2}
                onChange={(e: any) => HandleDifficultyChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="dif3" {...labelStyle}>
                3
              </label>
              <input
                id="dif3"
                type="radio"
                name="difficulty"
                value={3}
                onChange={(e: any) => HandleDifficultyChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="dif4" {...labelStyle}>
                4
              </label>
              <input
                id="dif4"
                type="radio"
                name="difficulty"
                value={4}
                onChange={(e: any) => HandleDifficultyChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="dif5" {...labelStyle}>
                5
              </label>
              <input
                id="dif5"
                type="radio"
                name="difficulty"
                value={5}
                onChange={(e: any) => HandleDifficultyChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
          </div>
        </div>
        <div id="urgenceRadio" {...inputContainerStyle}>
          <h5 {...labelStyle}>Select Urgence</h5>
          <div className="flex w-3/4">
            <div {...radioInputContainerStyle}>
              <label htmlFor="urg1" {...labelStyle}>
                1
              </label>
              <input
                id="urg1"
                type="radio"
                name="urgence"
                value={1}
                onChange={(e: any) => HandleUrgenceChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="urg2" {...labelStyle}>
                2
              </label>
              <input
                id="urg2"
                type="radio"
                name="urgence"
                value={2}
                onChange={(e: any) => HandleUrgenceChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="urg3" {...labelStyle}>
                3
              </label>
              <input
                id="urg3"
                type="radio"
                name="urgence"
                value={3}
                onChange={(e: any) => HandleUrgenceChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="urg4" {...labelStyle}>
                4
              </label>
              <input
                id="urg4"
                type="radio"
                name="urgence"
                value={4}
                onChange={(e: any) => HandleUrgenceChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
            <div {...radioInputContainerStyle}>
              <label htmlFor="urg5" {...labelStyle}>
                5
              </label>
              <input
                id="urg5"
                type="radio"
                name="urgence"
                value={5}
                onChange={(e: any) => HandleUrgenceChanges(e)}
                {...radioInputStyle}
              ></input>
            </div>
          </div>
        </div>
        {/*
          TODO: add time management (maybe?)
        */}
      </div>
      <div id="right" {...cardStyle}>
        <div className="flex flex-col w-full p-4">
          <label {...labelStyle} htmlFor="tckDesc">
            Description :
          </label>
          <textarea
            id="tckDesc"
            value={tskDesc}
            onChange={(e: any) => HandleDescChanges(e)}
            {...inputStyle}
          ></textarea>
        </div>
        <button onClick={() => btnCreateClicked()}>Create !</button>
      </div>
    </div>
  );
}

export default TicketCreationForm;
