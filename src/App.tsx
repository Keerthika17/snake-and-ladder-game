import React, { useState } from 'react'
import getData from './GridData';
import PlayerInformation from './Playerinformation';
import './Snakeladderboard.css';
import { playerValueContain, userValue } from './Userinput'
import { playerNameStore } from './Getplayername'

let count: number = 1
const App = () => {
  const [playerPosition, setPlayerPosition] = useState(playerValueContain)
  const [winner, setWinner] = useState("")
  const [whichPlayerTurn, setwhichPlayerTurn] = useState("")
  const [playerCurrentPosition, setPlayerCurrentPosition] = useState<string>()
  let randomValue = Math.floor(Math.random() * 6) + 1

  function playerMove() {

    if (playerPosition[`Player${count}`] + randomValue <= 100) {
      getData.forEach(element => {
        if (element.id === playerPosition[`Player${count}`]) {
          element.players[`Player${count}`] = ''
        }
      })
      getData.forEach(element => {
        if (element.id === playerPosition[`Player${count}`] + randomValue) {
          console.log("randomValue", randomValue)
          if (element.tomove !== '') {
            getData.forEach(no => {

              if (element.tomove === no.id) {
                no.players[`Player${count}`] = 'true'

                setPlayerPosition({ ...playerPosition, [`Player${count}`]: no.id })
                setwhichPlayerTurn(`Player${count} TURN`)
                setPlayerCurrentPosition(` Player${count} CurrentPosition ${element.id}`)

              }
            });
          }
          else {
            element.players[`Player${count}`] = 'true'
            setPlayerPosition({ ...playerPosition, [`Player${count}`]: element.id })
            setwhichPlayerTurn(`Player${count} TURN`)
            setPlayerCurrentPosition(`Player${count} CurrentPosition  ${element.id}`)
          }

          if (playerPosition[`Player${count}`] + randomValue === 100) {
            setWinner(`Player${count} is the winner🏆`)
          }
        }
      });
    }

    count++
    if (count === userValue + 1) {
      count = 1
    }

  }
  function restart() {
    window.location.reload()
  }

  return (
    <div>
      <div className='main'>
        <header className='mainheader'>
          <h2 className='dice'> DICE :{randomValue}</h2>
          <span><img src="https://www.kibrispdr.org/data/1760/dice-gif-10.gif" alt="" id='diceimage' /></span>
          <div>  <h4 id='playerturn'>{whichPlayerTurn}</h4></div>
          <h4 id='currentposition'>{playerCurrentPosition}</h4>
          <div  > <button className="movebutton" onClick={playerMove}>START</button><br /></div>
          <div id='playername'> {playerNameStore.map(n => <div>{n.Player} : {n.Name}</div>)} </div>
          <div><h1 id='winner'>{winner}</h1></div>

          <button onClick={restart} id="restart"> restart</button>

        </header>

        <div className='grid'> {getData.map((no) => <div className=" gridtable" > <PlayerInformation cellno={no.id} iconvalue={no.icon} move={no.tomove} value={no.players} key={no.id} /></div>)}</div>

      </div>
    </div>
  )
}
export default App;
