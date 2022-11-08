interface boadrGrid{
  id:number,
  icon:string,
  tomove:string|number
  players:any
}

let getData:boadrGrid[] = []
for (let i = 100; i >= 1; i -= 10) {
  if (i % 20 === 0) {
    for (let j = i; j > (i - 10); j--) {
      getData.push({
        id: j,
        icon: '',
        tomove: '',
        players: {}
      })
    }
  }
  else {
    for (let j = (i - 9); j <= i; j++) {
      getData.push({
        id: j,
        icon: '',
        tomove: '',
        players: {}
      })

    }
  }
}

interface snakeLaddermove{
  fromvalue:number,
  tovalue:number,
  icon:string
}



const snakeLadder :snakeLaddermove[] = [{ fromvalue: 31, tovalue: 15, icon: '🐍' },
{ fromvalue: 48, tovalue: 36, icon: '🐍' },
{ fromvalue: 63, tovalue: 20, icon: '🐍' },
{ fromvalue: 88, tovalue: 6, icon: '🐍' },
{ fromvalue: 97, tovalue: 10, icon: '🐍' },
{ fromvalue: 65, tovalue: 45, icon: '🐍' },
{ fromvalue: 33, tovalue: 26, icon: '🐍' },
{ fromvalue: 12, tovalue: 50, icon: '🧬 ' },
{ fromvalue: 4, tovalue: 24, icon: '🧬' },
{ fromvalue: 8, tovalue: 32, icon: '🧬' },
{ fromvalue: 78, tovalue: 97, icon: '🧬' },
{ fromvalue: 4, tovalue: 24, icon: '🧬' },
{ fromvalue: 42, tovalue: 54, icon: '🧬' },
{ fromvalue: 16, tovalue: 25, icon: '🧬' },


]

getData.forEach(box => {
  snakeLadder.forEach(snakelad => {
    if (box.id === snakelad.fromvalue) {
      box.icon = snakelad.icon
      box.tomove = snakelad.tovalue
    }
    if (box.id === 100) {
      box.icon = "🏆"
    }
  });
});
export default getData