import React, { Component } from "react";
import "../styles/movie.css";
class Movie extends Component {
  render() {
    return (
      <div className="movieChild">
        <img className="imagesMovies" src={this.props.movie.img} />
      </div>
    );
  }
}

export default Movie;
