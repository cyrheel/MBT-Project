import React from "react";
import { useGetUsers } from "../Hooks/useGetUser";
import { inputContainerStyle, labelStyle, inputStyle } from "Styles/style";

function UsersDropDown(props: any): JSX.Element {
  const data = useGetUsers();

  if (data.length === 0) {
    return <p>No Users in DB :/</p>;
  }

  return (
    <div {...inputContainerStyle}>
      <label htmlFor="tskProject" {...labelStyle}>
        Select Members
      </label>
      <select
        id="tskProject"
        onChange={(e: any) => props.callback(e)}
        {...inputStyle}
      >
        {data.map((user: any) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UsersDropDown;
