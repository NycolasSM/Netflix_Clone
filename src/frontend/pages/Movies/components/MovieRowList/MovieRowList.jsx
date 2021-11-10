import React, { useState } from 'react'
import './MovieRowList.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRowList = ({
  title,
  movies
}) => {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrowList = () => {
    let x = scrollX + Math.round(window.innerWidth / 2 + 294);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrowList = () => {
    let x = scrollX - Math.round(window.innerWidth / 2 + 294);
    let listWidth = movies.results.length * 200;
    if((window.innerWidth - listWidth) > x) {
      x = window.innerWidth - listWidth - 90;
    }
    setScrollX(x);
  }

  console.log(movies)


  return (
    <div className="movieRow">
      <h2 className="movieRowTitle">{title}</h2>
      <div className="movieRowButtonLeft" onClick={handleLeftArrowList}>
        <NavigateBeforeIcon style={{ fontSize: 40 }}/>
      </div>
      <div className="movieRowButtonRight" onClick={handleRightArrowList}>
        <NavigateNextIcon style={{ fontSize: 40 }} />
      </div>

      <div className="movieRowListContainer">
        <div className="movieRowList" style={{
          marginLeft: scrollX,
          width: movies.results.length * 200
        }}>
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
