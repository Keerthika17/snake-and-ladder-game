
import Player from './Playerdisplay'

interface displayProp {
  cellno: number;
  iconvalue: string;
  move: string | number;
  value: any;
}

const PlayerInformation = (props: displayProp) => {
  let players = []
  for (let i in props.value) {
    if (props.value[i] === 'true') {
      players.push([i])
    }
  }
  return (
    <div>
      <h1>{props.cellno}</h1>
      <h2 style={{ color: "white" }}> {players.map((n,key) => <div key={key}><Player player={n}/></div> )}</h2>
      <h1>{props.iconvalue}</h1>
      <h1>{props.move}</h1>
    </div>
  )
}

export default PlayerInformation;