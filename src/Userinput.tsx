import React, { useState } from 'react'
import Getplayername from './Getplayername'
import './Userinput.css'
let userValue: number;
let playerValueContain: any;
export default function Userinput() {
    const [noofplayers, setNoofplayers] = useState<number|string>()
    const [gettingUserName, setGettingUserName] = useState(false)
    const [hideScreen, setHideScreen] = useState("display")

    function getInput() {
        let playerObject: any = {}
        if (noofplayers !== undefined)
            if ((noofplayers <= 4)) {
                userValue = Number(noofplayers)
                console.log(userValue)
                for (let i = 1; i <= userValue; i++) {
                    playerObject[`Player${i}`] = 0
                }
                playerValueContain = playerObject
                console.log(playerValueContain)
                setGettingUserName(true)
                setHideScreen("invisible")
            }
            else {
                alert(" PLEASE ENTER ABOVE ONE PLAYER AND BELOW 5 PLAYERS")
            }

    }
    return (
        <div>

            <div className={hideScreen}>

                <header id='use'>
                    <div id="heading"><h1>🎲SNAKE LADDER GAME🐍</h1></div>
                    <div id="gif"><img src="https://media.tenor.com/KBNPB0oVi_oAAAAj/nat19-natural19.gif" alt="" /></div>
                    <h5 id='name'>ENTER THE NUMBER OF PLAYERS</h5>
                    <input type="number" onChange={(e) => { setNoofplayers(e.target.value) }} />

                    <p id='noplayers'>Number of Players: <span>{noofplayers}</span></p>
                    <div>
                        <button onClick={getInput} > submit </button>
                    </div>

                </header>
            </div>

            <div className='change'>
                {gettingUserName ? <Getplayername /> : null}
            </div>

        </div>
    )
}
export { playerValueContain, userValue }