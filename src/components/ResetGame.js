import React from 'react'

export default function ResetGame({reset}) {
  return (
    <div>
      <button className="reset-btn" onClick={reset}>Reset Game</button>
    </div>
  )
}
