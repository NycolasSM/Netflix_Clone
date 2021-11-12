import React, { useState } from 'react'
import './MovieRowList.css'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PlayArrow from '@material-ui/icons/PlayArrow'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import ControlPoint from '@material-ui/icons/ControlPoint'

const MovieRowList = ({
  title,
  movies
}) => {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrowList = () => {
    let x = scrollX + Math.round(window.innerWidth / 2 + 294);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrowList = () => {
    let x = scrollX - Math.round(window.innerWidth / 2 + 294);
    let listWidth = movies.results.length * 200;
    if ((window.innerWidth - listWidth) > x) {
      x = window.innerWidth - listWidth - 90;
    }
    setScrollX(x);
  }

  console.log(movies)

  return (
    <div className="movieRow">
      <h2 className="movieRowTitle">{title}</h2>
      <div className="movieRowButtonLeft" onClick={handleLeftArrowList}>
        <NavigateBeforeIcon style={{ fontSize: 40 }} />
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
            <div key={key} className="movieRowListItemContainer">
              <div className="movieRowListItem">
                <img id="test" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                <div className="movieFocusInfo">
                  <div className="movieFocusInfoButtons">
                    <PlayArrow className="movieFocusInfoButtonPlay" style={{ fontSize: 31, border: "solid 2px #e80918", borderRadius: "50%" }} />
                    <ThumbUp className="movieFocusInfoButtonRate" style={{ fontSize: 27, }} />
                    <ThumbDown className="movieFocusInfoButtonRate" style={{ fontSize: 27 }} />
                    <ControlPoint className="movieFocusInfoButtonAddFavorite"style={{ fontSize: 31 }} />
                  </div>
                  <div className="movieFocusInfoTitle">
                    {item.title ? item.title : item.name }
                  </div>
                  <div className="movieFocusInfoRateAndYear">
                    <span style={{ color: "#46d369" }}>nota {item.vote_average}</span>
                    <span>{item.release_date ? item.release_date : item.first_air_date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRowList
