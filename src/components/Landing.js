import React, { Component } from "react";
import "../styles/landing.css";
class Landing extends Component {
  render() {
    let color = ["0", "#8e44ad", "#f39c12   ", "#27ae60", "#c0392b"];
    return (
      <div className="container">
        {this.props.users.map((user) => (
          <div
            style={{ backgroundColor: `${color[user.id]}` }}
            className="user"
          >
            {user.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Landing;
