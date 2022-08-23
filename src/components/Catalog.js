import React, { Component } from "react";
import "../styles/catalog.css";
import Movie from "./Movie";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movieInput: "",
      moviesFiltered: [],
    };
  }
  movieSearch = (e) => {
    let moviesInfo = this.props.moviesInfo.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      movieInput: e.target.value,
      moviesFiltered: moviesInfo,
    });
  };
  render() {
    return (
      <div className="catalogContainer">
        <div className="input">
          <input
            type="text"
            value={this.state.movieInput}
            onChange={this.movieSearch}
          />
          <span className="budget">Budget:</span>
        </div>

        <div className="movies">
          {this.state.moviesFiltered.length
            ? this.state.moviesFiltered.map((movie) => {
                return <Movie movie={movie} />;
              })
            : this.props.moviesInfo.map((movie) => {
                return <Movie movie={movie} />;
              })}
        </div>
      </div>
    );
  }
}

export default Catalog;
