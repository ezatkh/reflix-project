import React, { Component } from "react";
import "../styles/movieDetail.css";
class MovieDetail extends Component {
  render() {
    let movieId = this.props.match.params.movieID;
    let movieSelected = this.props.moviesInfo.filter(
      (movie) => movie.id == movieId
    )[0];
    return (
      <div className="movieDetail">
        <h1>
          {movieSelected.title}({movieSelected.year})
        </h1>
        <img className="movieDetailImage" src={movieSelected.img} />
        <p>{movieSelected.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetail;
