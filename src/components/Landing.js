import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/catalog">{user.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Landing;
