import React, { useEffect, useState } from 'react'
import './MoviePage.css'
import { GetMovieInfo, GetMoviesList } from '../../../backend/Tmdb.js'

import MovieRowList from './components/MovieRowList/MovieRowList.jsx';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

const App = () => {

  const [moviesList, setMoviesList] = useState([]);
  const [featuredMovieData, setFeaturedMovieData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // load of movies list
      let list = await GetMoviesList();
      setMoviesList(list)

      // get featured movie
      let originalsNetflix = list.filter(i => i.reference === "originalsNetflix")
      let randomChosen = Math.floor(Math.random() * (originalsNetflix[0].items.results.length -1));
      let chosen = originalsNetflix[0].items.results[randomChosen];
      let chosenInfo = await GetMovieInfo(chosen.id, 'tv')
      console.log(chosenInfo)
      setFeaturedMovieData(chosenInfo)
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredMovieData &&
        <FeaturedMovie item={featuredMovieData} />
      }

      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieRowList key={key} title={item.title} movies={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
