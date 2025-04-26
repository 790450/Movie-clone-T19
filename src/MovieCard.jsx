import React from 'react'

const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
  return (
    <div className="movie">
    <div>
      <p>{Year}</p>
    </div>
    <div>
      <img src= {Poster !== "N/A" ? Poster : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"}
          alt={Title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";}}/>
    </div>
    <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
    </div>
  </div>
  )
}

export default MovieCard
