import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({
  item
}) => {
  console.log(item);

  let releaseDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push( item.genres[i].name )
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featuredGradientVertical" >
        <div className="featuredGradientHorizontal">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
            <div className="featuredRate">Avaliação {item.vote_average}</div>
            <div className="featuredYear">{releaseDate.getFullYear()}</div>
            <div className="featuredSeasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featuredDescription">{item.overview}</div>
          <div className="featuredButtons">
            <button href={`/watch/${item.id}`} className="featuredWatchButton">Assistir</button>
            <button href={`/list/add${item.id}`} className="featuredAddToListButton">+ Minha Lista</button>
          </div>
          <div className="featuredGenres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie
