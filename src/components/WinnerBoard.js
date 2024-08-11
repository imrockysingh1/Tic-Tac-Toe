import React from 'react'
import Restart from './PlayAgain'
// import  './Style.css'   
export default function WinnerBoard({winner,}) {
  return (
    <div className="winner_board">
        <p className="cong">Congratulations!</p>
        <p className='winner-name'> {winner} is winner</p>
    </div>
  )
}
