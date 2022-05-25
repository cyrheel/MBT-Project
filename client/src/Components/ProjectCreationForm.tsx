import React, { useState } from "react";
import {
  cardStyle,
  formContainerStyle,
  inputStyle,
  buttonStyle,
  inputContainerStyle,
} from "../Styles/style";

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
    <div {...formContainerStyle}>
      <div {...cardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="projName">Project Name</label>
          <input
            id="projName"
            type="text"
            value={projectName}
            onChange={(e: any) => HandleProjectNameChanges(e)}
            {...inputStyle}
          ></input>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="projMembers">Project Members</label>
          <select
            id="projMembers"
            onChange={(e: any) => HandleProjectMembersChanges(e)}
            {...inputStyle}
          >
            <option value="user1">User1</option>
            <option value="user2">User2</option>
            <option value="user3">User3</option>
          </select>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="startD">Start Date</label>
          <input
            id="startD"
            type="date"
            value={startDate}
            onChange={(e: any) => HandleStartDateChanges(e)}
            {...inputStyle}
          ></input>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="endD">End Date (Optional)</label>
          <input
            id="endD"
            type="date"
            value={endDate}
            onChange={(e: any) => HandleEndDateChanges(e)}
            {...inputStyle}
          ></input>
        </div>
      </div>
      <div {...cardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="projStatus">Project Status</label>
          <select
            id="projStatus"
            onChange={(e: any) => HandleProjectStatusChanges(e)}
            {...inputStyle}
          >
            <option value="open">Open</option>
            <option value="close">Close</option>
            <option value="inprogress">In Progress</option>
          </select>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            wrap="soft"
            value={desc}
            onChange={(e: any) => HandleDescChanges(e)}
            {...inputStyle}
          ></textarea>
        </div>
        <div {...inputContainerStyle}>
          <button onClick={() => btnCreateClicked()} {...buttonStyle}>
            Create !
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreationForm;
