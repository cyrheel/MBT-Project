import React, { useState } from "react";

// Interfaces

function ProjectCreationForm(): JSX.Element {
  // Helpers
  let today = new Date(Date.now()).toISOString();
  today = today.slice(0, 10);

  // States
  const [projectName, setProjectName] = useState<string>("");
  const [projectStatus, setProjectStauts] = useState<string>("");
  const [projectMembers, setProjectMembers] = useState<string>("");
  const [startDate, setStartDate] = useState<string>(today);
  const [endDate, setEndDate] = useState<string>(today);
  const [desc, setDesc] = useState<string>("");

  // Funcs
  const HandleProjectNameChanges = (e: any): void => {
    setProjectName(e.target.value);
  };
  const HandleProjectStatusChanges = (e: any): void => {
    setProjectStauts(e.target.value);
  };
  const HandleProjectMembersChanges = (e: any): void => {
    setProjectMembers(e.target.value);
  };
  const HandleStartDateChanges = (e: any): void => {
    setStartDate(e.target.value);
  };
  const HandleEndDateChanges = (e: any): void => {
    setEndDate(e.target.value);
  };
  const HandleDescChanges = (e: any): void => {
    setDesc(e.target.value);
  };
  const btnCreateClicked = (): void => {
    const newProject = {
      title: projectName,
      description: desc,
      start_time: startDate,
      end_time: endDate,
      status: projectStatus,
      project_user: projectMembers,
      // project_ticket:
      // project_picture
    };
    //TODO: Handle Project Creation Here (send all State to GQL)
  };

  // Render
  return (
    <div id="form">
      <div id="left">
        <label htmlFor="projName">Project Name</label>
        <input
          id="projName"
          type="text"
          value={projectName}
          onChange={(e: any) => HandleProjectNameChanges(e)}
        ></input>
        <label htmlFor="projMembers">Project Members</label>
        <select
          id="projMembers"
          onChange={(e: any) => HandleProjectMembersChanges(e)}
        >
          <option value="wip">A voir pour mettre de vrais user ?</option>
          <option value="wip2">ça serait cool d'avoir leur pp aussi</option>
          <option value="wip3">trkl c'est du detail</option>
        </select>
        <label htmlFor="startD">Start Date</label>
        <input
          id="startD"
          type="date"
          value={startDate}
          onChange={(e: any) => HandleStartDateChanges(e)}
        ></input>
        <label htmlFor="endD">End Date</label>
        <input
          id="endD"
          type="date"
          value={endDate}
          onChange={(e: any) => HandleEndDateChanges(e)}
        ></input>
      </div>
      <div id="right">
        <label htmlFor="projStatus">Project Status</label>
        <select
          id="projStatus"
          onChange={(e: any) => HandleProjectStatusChanges(e)}
        >
          <option value="open">Open</option>
          <option value="close">Close</option>
          <option value="inprogress">In Progress</option>
        </select>
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          wrap="soft"
          value={desc}
          onChange={(e: any) => HandleDescChanges(e)}
        ></textarea>
        <button onClick={() => btnCreateClicked()}>Create !</button>
      </div>
    </div>
  );
}

export default ProjectCreationForm;
