import React, { Component } from "react";
import "../styles/catalog.css";
import Movie from "./Movie";
class Catalog extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="catalogContainer">
        <div className="input">
          <label>Search</label>
          <input type="text" />
          <span className="budget">Budget:</span>
        </div>

        <div className="movies">
          {this.props.moviesInfo.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
