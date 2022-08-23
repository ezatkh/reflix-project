import React, { Component } from "react";
import "../styles/movie.css";
import { Link } from "react-router-dom";
class Movie extends Component {
  te() {
    console.log("ddd");
  }
  render() {
    return (
      <div className="movieChild">
        <button onClick={this.te()}>
          <i class="fa fa-plus"></i>
        </button>
        <div>
          <Link to={`/movies/${this.props.movie.id}`}>
            <img className="imagesMovies" src={this.props.movie.img} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Movie;
