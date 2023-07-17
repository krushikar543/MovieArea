import React from 'react';

interface Movie {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {


// const MovieCard = ({ movie}) => {
  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;