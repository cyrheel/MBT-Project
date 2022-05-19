import React, { useState } from "react";

function TicketCreationForm() {
  // Helpers
  // let today = new Date(Date.now()).toISOString();
  // today = today.slice(0, 10);

  // State
  const [taskName, setTaskName] = useState<string>("");
  const [taskMembers, setTaskMembers] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(1);
  const [urgence, setUrgence] = useState<number>(1);
  const [labels, setLabels] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  //TODO: view for mockup and model for time management

  // Funcs
  const HandlerTskNameChanges = (e: any): void => {
    setTaskName(e.target.value);
  };

  const HandleTaskMembersChanges = (e: any): void => {
    setTaskMembers(e.target.value);
  };

  const HandleDifficultyChanges = (e: any): void => {
    setDifficulty(e.target.value);
  };

  const HandleUrgenceChanges = (e: any): void => {
    setUrgence(e.target.value);
  };

  const HandleLabelsChanges = (e: any): void => {
    setLabels(e.target.value);
  };

  const HandleDescChanges = (e: any): void => {
    setDesc(e.target.value);
  };

  const btnCreateClicked = (): void => {
    const newTicket = {
      title: taskName,
      description: desc,
      // estimated_time:
      // spent_time:
      status: labels,
      priority: urgence,
      difficulty: difficulty,
      ticket_user: taskMembers,
      ticket_comment: [],
    };
    //TODO: Handle Ticket Creation Here (send all State w/ GQL to Db)
  };

  // Render
  return (
    <div className="flex bg-slate-100 justify-evenly">
      <div id="left" className="flex flex-col w-1/3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="tskName"
        >
          Task Name :
        </label>
        <input
          className="bg-gray-200 text-gray-700 border rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="tskName"
          type="text"
          value={taskName}
          onChange={(e: any) => HandlerTskNameChanges(e)}
        ></input>
        <label htmlFor="tskMembers">Select Members</label>
        <select
          id="tskMembers"
          onChange={(e: any) => HandleTaskMembersChanges(e)}
        >
          <option value="wip">A voir pour mettre de vrais user ?</option>
          <option value="wip2">ça serait cool d'avoir leur pp aussi</option>
          <option value="wip3">trkl c'est du detail</option>
        </select>
        <div id="difficultyRadio">
          <h5>Select Difficulty</h5>
          <label htmlFor="dif1">1</label>
          <input
            id="dif1"
            type="radio"
            name="difficulty"
            value={1}
            onChange={(e: any) => HandleDifficultyChanges(e)}
          ></input>
          <label htmlFor="dif2">2</label>
          <input
            id="dif2"
            type="radio"
            name="difficulty"
            value={2}
            onChange={(e: any) => HandleDifficultyChanges(e)}
          ></input>
          <label htmlFor="dif3">3</label>
          <input
            id="dif3"
            type="radio"
            name="difficulty"
            value={3}
            onChange={(e: any) => HandleDifficultyChanges(e)}
          ></input>
          <label htmlFor="dif4">4</label>
          <input
            id="dif4"
            type="radio"
            name="difficulty"
            value={4}
            onChange={(e: any) => HandleDifficultyChanges(e)}
          ></input>
          <label htmlFor="dif5">5</label>
          <input
            id="dif5"
            type="radio"
            name="difficulty"
            value={5}
            onChange={(e: any) => HandleDifficultyChanges(e)}
          ></input>
        </div>
        <div id="urgenceRadio">
          <h5>Select Urgence</h5>
          <label htmlFor="urg1">1</label>
          <input
            id="urg1"
            type="radio"
            name="urgence"
            value={1}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label htmlFor="urg2">2</label>
          <input
            id="urg2"
            type="radio"
            name="urgence"
            value={2}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label htmlFor="urg3">3</label>
          <input
            id="urg3"
            type="radio"
            name="urgence"
            value={3}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label htmlFor="urg4">4</label>
          <input
            id="urg4"
            type="radio"
            name="urgence"
            value={4}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
          <label htmlFor="urg5">5</label>
          <input
            id="urg5"
            type="radio"
            name="urgence"
            value={5}
            onChange={(e: any) => HandleUrgenceChanges(e)}
          ></input>
        </div>
      </div>
      <div id="middle" className="flex flex-col w-1/3">
        <label htmlFor="tsklabels">Labels: </label>
        <input
          id="tsklabels"
          type="text"
          value={labels}
          onChange={(e: any) => HandleLabelsChanges(e)}
        ></input>
        {/*
          TODO: add time management
        */}
      </div>
      <div id="right" className="flex flex-col w-1/3">
        <label htmlFor="tckDesc">Task Description</label>
        <textarea
          id="tckDesc"
          value={desc}
          onChange={(e: any) => HandleDescChanges(e)}
        ></textarea>
        <button onClick={() => btnCreateClicked()}>Create !</button>
      </div>
    </div>
  );
}

export default TicketCreationForm;
