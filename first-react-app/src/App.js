import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
//Main App Component containing the child non-functional UserList Component
class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default App;
