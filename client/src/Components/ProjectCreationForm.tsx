import React, { useState } from "react";
import moment from "moment";
import { ApolloError, useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../Hooks/useCreateProject";
import UsersDropDown from "./UsersDropDown";
import {
  formContainerStyle,
  cardStyle,
  inputStyle,
  labelStyle,
  buttonStyle,
  inputContainerStyle,
} from "../Styles/style";
import StatusDropDown from "./StatusDropDown";

function ProjectCreationForm(): JSX.Element {
  const dateFormat = "yyyy-MM-DD";
  // State
  const [projectName, setProjectName] = useState<string>("");
  const [projectStatus, setProjectStauts] = useState<string>("");
  const [projectMembers, setProjectMembers] = useState<string>("");
  const [startDate, setStartDate] = useState<string>(
    moment().format().toString()
  );
  const [endDate, setEndDate] = useState<Date>(new Date(Date.now()));
  const [desc, setDesc] = useState<string>("");
  // eslint-disable-next-line
  const [addProject, { data, loading, error }] = useMutation(CREATE_PROJECT);

  // Funcs
  const HandleProjectNameChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setProjectName(e.target.value);
  };

  const HandleProjectStatusChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setProjectStauts(e.target.value);
  };

  const HandleProjectMembersChanges = (e: any): void => {
    setProjectMembers(e.target.value);
  };

  const HandleStartDateChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStartDate(e.target.value);
  };

  const HandleEndDateChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newDate = new Date(e.target.value);
    setEndDate(newDate);
  };

  const HandleDescChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDesc(e.target.value);
  };

  const RenderError = (err: ApolloError | any): JSX.Element => {
    return (
      <div>
        <p>Error in project creation :/</p>
        <p>{err ? err.message : "No error msg"}</p>
      </div>
    );
  };
  const RenderLoading = (): JSX.Element => {
    return <p>Loading...</p>;
  };

  // Render
  if (error) {
    return <RenderError err={error} />;
  }
  if (loading) {
    return <RenderLoading />;
  }
  return (
    <form
      onSubmit={(e) => {
        // TODO: type params and func return
        e.preventDefault();
        addProject({
          variables: {
            id: "$createNewProjectId",
            title: projectName,
            description: desc,
            start_time: startDate,
            end_time: endDate,
            status: projectStatus,
            user_id: { id: projectMembers },
          },
        });
      }}
      {...formContainerStyle}
    >
      <div {...cardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="projName" {...labelStyle}>
            Project Name :
          </label>
          <input
            id="projName"
            type="text"
            value={projectName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              HandleProjectNameChanges(e)
            }
            {...inputStyle}
          ></input>
        </div>
        <UsersDropDown callback={HandleProjectMembersChanges} />
        <div {...inputContainerStyle}>
          <label htmlFor="startD" {...labelStyle}>
            Start Date
          </label>
          <input
            id="startD"
            type="date"
            value={moment(startDate).format(dateFormat)}
            // TODO: type params and func return
            onChange={(e: any) => HandleStartDateChanges(e)}
            {...inputStyle}
          ></input>
        </div>
        <div {...inputContainerStyle}>
          <label htmlFor="endD" {...labelStyle}>
            End Date (Optional)
          </label>
          <input
            id="endD"
            type="date"
            // TODO: type params and func return
            value={moment(endDate).format(dateFormat)}
            onChange={(e: any) => HandleEndDateChanges(e)}
            {...inputStyle}
          ></input>
        </div>
      </div>
      <div {...cardStyle}>
        <StatusDropDown callback={HandleProjectStatusChanges} />
        <div {...inputContainerStyle}>
          <label htmlFor="desc" {...labelStyle}>
            Description
          </label>
          <textarea
            id="desc"
            wrap="soft"
            value={desc}
            // TODO: type params and func return
            onChange={(e: any) => HandleDescChanges(e)}
            {...inputStyle}
          ></textarea>
        </div>
        <div {...inputContainerStyle}>
          <button type="submit" {...buttonStyle}>
            Create !
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProjectCreationForm;
