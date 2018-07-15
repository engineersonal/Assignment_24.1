import React from "react";
//Functional component Users displaying the UserList as props
const Users = props => {
  return (
    <div>
      <li>
        Name: {props.name} - Age-{props.age}
      </li>
      <br />
    </div>
  );
};

export default Users;
