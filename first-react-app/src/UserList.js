import React from "react";
import "./App.css";
import Users from "./Users";
//UserList component containing a child functional component Users
class UserList extends React.Component {
  constructor() {
    super();
    this.userlist = [
      { Name: "Sachin", Age: "10" },
      { Name: "Som", Age: "20" },
      { Name: "Suraj", Age: " " },
      { Name: "Saurav", Age: " " },
      { Name: "Rohan", Age: " " }
    ];
  }
  render() {
    return (
      <div>
        <ul>
          {this.userlist.map(item => <Users name={item.Name} age={item.Age} />)}
        </ul>
        <br />
      </div>
    );
  }
}

export default UserList;
