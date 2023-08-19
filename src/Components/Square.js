import React from 'react'

function Square({chooseBoard,value}) {
  // console.log(idx)
  return (
    <div className="square" onClick={chooseBoard}>{value}</div>
  )
}

export default Square