import React, { useEffect, useState } from 'react'
import './MoviePage.css'
import { GetMovieInfo, GetMoviesList } from '../../../backend/Tmdb.js'

import MovieRowList from './components/MovieRowList/MovieRowList.jsx';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';

const App = () => {

  const [moviesList, setMoviesList] = useState([]);
  const [featuredMovieData, setFeaturedMovieData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      // load of movies list
      let list = await GetMoviesList();
      setMoviesList(list)

      // get featured movie
      let originalsNetflix = list.filter(i => i.reference === "originalsNetflix")
      let randomChosen = Math.floor(Math.random() * (originalsNetflix[0].items.results.length - 1));
      let chosen = originalsNetflix[0].items.results[randomChosen];
      let chosenInfo = await GetMovieInfo(chosen.id, 'tv')
      console.log(chosenInfo)
      setFeaturedMovieData(chosenInfo)
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredMovieData &&
        <FeaturedMovie item={featuredMovieData} />
      }

      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieRowList key={key} title={item.title} movies={item.items} />
        ))}
      </section>

      <footer>
        Api usada TheMovieDb.org
      </footer>

      {moviesList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }

    </div>
  )
}

export default App
