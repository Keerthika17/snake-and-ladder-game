import React, { useState } from 'react'
import App from './App';
import { userValue } from './Userinput';
import './Gettingplayername.css'
let count = 1
let playerNames: string[] = []
let playerNameStore: any[] = []
export default function Getplayername() {
    const [userName, setUserName] = useState('')
    const [startGame, setSetGame] = useState<boolean>(false)
    const [gamedisplay, setGamedisplay] = useState("gameon")

    function gettingPlayerName() {
        playerNames.push(userName)
        console.log(playerNames)
        setUserName('')
        count++
        if (count === userValue + 1) {
            for (let i = 1; i <= userValue; i++) {
                playerNameStore.push({ Player: (`Player${i}`), Name: playerNames[i - 1] })
                console.log(playerNameStore)

            }
            setSetGame(true)
            setGamedisplay("gameoff")
        }

    }
    return (
        <div>
            <div className={gamedisplay}>
                <header id="playernameheadercss"><br />
                    <div id="nameheading"><h1>🎲SNAKE LADDER GAME🐍</h1></div>
                    <div id="gifvalue"><img src="https://media.tenor.com/KBNPB0oVi_oAAAAj/nat19-natural19.gif" alt="" /></div>
                    <h4 id="getname">ENTER YOUR NAME</h4>
                    <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} /> <br />
                    <div> <h4> {playerNameStore.map(n => <div>{n.Player} : {n.Name}</div>)}</h4> </div>
                    <button onClick={gettingPlayerName} id="function">SUBMIT</button><br />


                </header>
            </div>
            {startGame ? <App /> : null}
        </div>
    )
}
export { playerNameStore, playerNames }