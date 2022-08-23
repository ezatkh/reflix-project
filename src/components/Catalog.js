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
  isShown = () => {
    var display = false;
    if (this.props.rentedMovies.length) display = true;
    return display;
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
          <span className="budget">Budget:{this.props.user.budget}$</span>
        </div>
        <div
          className="movieRent"
          style={{ display: this.isShown() ? "block" : "none" }}
        >
          {this.props.rentedMovies.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </div>

        <div className="movies">
          {this.state.moviesFiltered.length
            ? this.state.moviesFiltered.map((movie) => {
                return <Movie movieRent={this.props.movieRent} movie={movie} />;
              })
            : this.props.moviesInfo.map((movie) => {
                return <Movie movieRent={this.props.movieRent} movie={movie} />;
              })}
        </div>
      </div>
    );
  }
}

export default Catalog;
