
interface playerdisplay{
  player:string[]
}
const Player = ( prop:playerdisplay) => {
  return (
    <span>{prop.player}</span>
  )
}

export default Player