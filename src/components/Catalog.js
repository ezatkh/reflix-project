import React, { Component } from "react";
import "../styles/catalog.css";
import Movie from "./Movie";
import { Link } from "react-router-dom";
class Catalog extends Component {
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
            return (
              <Link to={`/movies/${movie.id}`}>
                <Movie movie={movie} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
