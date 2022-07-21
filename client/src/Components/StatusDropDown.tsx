import React from "react";
import {
  inputContainerStyle,
  labelStyle,
  inputStyle,
  modalBackgroundStyle,
  modalStyle,
  buttonStyle,
} from "Styles/style";

function StatusDropDown(props: any): JSX.Element {
  // State
  const [modal, setModal] = React.useState(false);
  const [newStatus, setNewStatus] = React.useState("");
  const [opts, setOpts] = React.useState([
    {
      id: 0,
      name: "Open",
    },
    {
      id: 1,
      name: "In Progress",
    },
    {
      id: 2,
      name: "Close",
    },
  ]);

  // Funcs

  const handleNewStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewStatus(e.target.value);
  };

  const addStatus = (newStatus: string) => {
    setOpts([...opts, { id: opts.length, name: newStatus }]);
    setModal(false);
  };

  const DisplayModal = () => {
    return (
      <div {...modalBackgroundStyle}>
        <div {...modalStyle}>
          <div id="modal-header">
            <button type="button" onClick={() => setModal(!modal)}>
              X
            </button>
          </div>
          <div {...inputContainerStyle}>
            <label htmlFor="modal-input" {...labelStyle}>
              Add New Status
            </label>
            <input
              id="modal-input"
              type="text"
              onChange={(e) => handleNewStatusChange(e)}
              {...inputStyle}
            ></input>
            <button
              type="button"
              onClick={() => addStatus(newStatus)}
              {...buttonStyle}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  return modal ? (
    DisplayModal()
  ) : (
    <div {...inputContainerStyle}>
      <div className="flex">
        <label htmlFor="Status" {...labelStyle}>
          Select Status
        </label>
        <button
          className="border"
          type="button"
          onClick={() => setModal(!modal)}
        >
          +
        </button>
      </div>
      <select
        id="Status"
        onChange={(e: any) => props.callback(e)}
        {...inputStyle}
      >
        {opts.map((opt: any) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusDropDown;
