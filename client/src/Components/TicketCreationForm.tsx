import React, { useState } from "react";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { CREATE_TICKET } from "../Hooks/useCreateTicket";
import UsersDropDown from "./UsersDropDown";
import {
  formContainerStyle,
  inputContainerStyle,
  radioInputContainerStyle,
  inputStyle,
  labelStyle,
  radioInputStyle,
  buttonStyle,
  errorPageWrapper,
  customCardStyle,
  popUpContainerStyle,
} from "../Styles/style";

function TicketCreationForm(): JSX.Element {
  // State
  const [tskName, setName] = useState<string>("");
  const [tskStatus, setStatus] = useState<string>("");
  const [tskLabels, setLabels] = useState<string>("");
  const [tskProject, setProject] = useState<string>("");
  const [tskMembers, setMembers] = useState<string>("");
  const [tskDifficulty, setDifficulty] = useState<string>("");
  const [tskUrgence, setUrgence] = useState<string>("");
  const [tskDesc, setDesc] = useState<string>("");
  // eslint-disable-next-line
  const [addTicket, { data, loading, error }] = useMutation(CREATE_TICKET);
  const [popUpState, setPopUpState] = useState<boolean>(false);

  // Funcs
  const HandleNameChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const HandleStatusChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStatus(e.target.value);
  };

  const HandleLabelsChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLabels(e.target.value);
  };

  const HandleProjectChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setProject(e.target.value);
  };

  const HandleMembersChanges = (e: any): void => {
    setMembers(e.target.value);
  };

  const HandleDifficultyChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDifficulty(e.target.value);
  };

  const HandleUrgenceChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUrgence(e.target.value);
  };

  const HandleDescChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDesc(e.target.value);
  };

  const RenderError = ({ err }: ApolloError | any): JSX.Element => {
    return (
      <div {...errorPageWrapper}>
        <h1>Error in Ticket creation :/</h1>
        {err ? <p>{err.message}</p> : <p>"No error msg"</p>}
        <button
          onClick={() => window.location.replace(window.location.toString())}
          {...buttonStyle}
        >
          {"<-"}
        </button>
      </div>
    );
  };

  const RenderLoading = (): JSX.Element => {
    return <h1>Loading...</h1>;
  };

  const RenderValidationPopUp = (): JSX.Element => {
    return (
      <div {...popUpContainerStyle}>
        <div className="flex justify-end pr-3">
          <button onClick={() => setPopUpState(!popUpState)}>X</button>
        </div>
        <h1 {...labelStyle}>Ticket created successfully !</h1>
      </div>
    );
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
      onSubmit={async (e) => {
        // TODO: type params and func return
        e.preventDefault();
        const newTicketID = "5";
        const newTicket = {
          createNewTicketId: newTicketID,
          title: tskName,
          users: [
            {
              id: tskMembers !== "" ? tskMembers : "1",
            },
          ],
          difficulty: tskDifficulty,
          priority: tskUrgence,
          labels: tskLabels,
          status: tskStatus,
          description: tskDesc,
          projectId: tskProject !== "" ? parseInt(tskProject) : 1,
        };
        await addTicket({ variables: newTicket });
        setName("");
        setStatus("");
        setLabels("");
        setProject("");
        setMembers("");
        setDifficulty("");
        setUrgence("");
        setDesc("");
        setPopUpState(!popUpState);
        // TODO trigger l'affichage d'une popup pour dire que le ticket a bien été créé
      }}
      {...formContainerStyle}
    >
      {popUpState ? RenderValidationPopUp() : null}
      <div id="left" {...customCardStyle}>
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
      <div id="middle" {...customCardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="tskProject" {...labelStyle}>
            Select Project
          </label>
          <select
            id="tskProject"
            onChange={(e: any) => HandleProjectChanges(e)}
            {...inputStyle}
          >
            <option value="1">Projet A</option>
            <option value="2">Projet B</option>
            <option value="3">show more...</option>
          </select>
        </div>
        <UsersDropDown callback={HandleMembersChanges} />
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
                value={"1"}
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
                value={"2"}
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
                value={"3"}
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
                value={"4"}
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
                value={"5"}
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
                value={"1"}
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
                value={"2"}
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
                value={"3"}
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
                value={"4"}
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
                value={"5"}
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
      <div id="right" {...customCardStyle}>
        <div {...inputContainerStyle}>
          <label htmlFor="tckDesc" {...labelStyle}>
            Description :
          </label>
          <textarea
            id="tckDesc"
            value={tskDesc}
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

export default TicketCreationForm;
