import React, { useState, useEffect, useRef } from 'react'

import { getMusic, getMoves } from '../api'

const randomIndex = (length) => Math.floor(Math.random() * length)

function DanceMoves() {
  const [moves, setMoves] = useState([])
  const [moveId, setMoveId] = useState(randomIndex(16))
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    console.log('page loaded')

    getMusic()
    .then(trackArr => {
      setTracks(trackArr)
    })

    getMoves()
      .then((moveData) => {
        console.log(moveData)
        setMoves(moveData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const startRandom = () => {
    let audio = new Audio(tracks[randomIndex(tracks.length)])
    audio.play()
    
    const interval = setInterval(() => {
      let randoNum = randomIndex(16)
      while (randoNum === moveId) {
        randoNum = randomIndex(16)
      }
      setMoveId(randoNum)
    }, 1200)
    setTimeout(() => {
      clearInterval(interval)
    }, 30000)
  }

  return (
    <div>
      <h1>Mini Moves</h1>
      <img src={moves[moveId]?.images} className='image' />
      <div className='button-container'>
        <button onClick={startRandom}>Get moving!</button>
      </div>
    </div>
  )
}

export default DanceMoves
