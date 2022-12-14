import React, { Component } from "react";
import "../styles/movie.css";
import { Link } from "react-router-dom";
class Movie extends Component {
  movieRentToggle = () => {
    let moviesString = JSON.stringify(this.props.movie);
    let movieParser = JSON.parse(moviesString);
    this.props.movieRent(movieParser);
  };
  render() {
    let rent = this.props.movie.isRented;
    let icon;
    if (rent) icon = "fa fa-minus";
    else icon = "fa fa-plus";
    return (
      <div className="movieChild">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img className="imagesMovies" src={this.props.movie.img} />
        </Link>
        <i onClick={this.movieRentToggle} class={icon}></i>
      </div>
    );
  }
}

export default Movie;
