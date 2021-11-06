import React from 'react'
import './MovieRowList.css'

const MovieRowList = ({
  title,
  movies
}) => {
  return (
    <div className="movieRow">
      <h2 className="movieRowTitle">{title}</h2>
      <div className="movieRowListContainer">
        <div className="movieRowList">
          {movies.results.length > 0 && movies.results.map((item, key) => (
            <div key={key} className="movieRowListItem">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRowList
