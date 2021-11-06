const API_KEY = "320ea41a85c773723e82d397b8db2917"
const API_BASE = "https://api.themoviedb.org/3"

/*
  - originais da netflix
  - recomendados (trendig)
  - em alta (top rated)
  - ação
  - comédia
  - terror
  - romance
  - documentários
*/

const baseFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export const GetMoviesList = async () => {
  return [
    {
      reference: 'originalsNetflix',
      title: 'Originais da Netflix',
      items: await baseFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'trending',
      title: 'Recomendados para Você',
      items: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'toprated',
      title: 'Em Alta',
      items: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'action',
      title: 'Ação',
      items: await baseFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'comedy',
      title: 'Comédia',
      items: await baseFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'horror',
      title: 'Terror',
      items: await baseFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'romance',
      title: 'Romance',
      items: await baseFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      reference: 'documentary',
      title: 'Documentários',
      items: await baseFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
    }
  ]
}

export const GetMovieInfo = async (movieId, type) => {
  let info = {};

  if (movieId) {
    switch (type) {
      case 'movie':
        info = await baseFetch(`/movie/${movieId}&language=pt-BR&api_key=${API_KEY}`)
      break;
      case 'tv':
        info = await baseFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
      break;
      default:
        info = null
      break
    }
  }

  return info
}