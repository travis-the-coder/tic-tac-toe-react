import cell from "./components/Cell"
import Cell from "./components/Cell"
import { useState, useEffect} from "react"

const App = () => {

  //Setting up the Squares, Circle, and victory message
  const [cells, setCells] = useState(["","","","","","","","","",])
  const [go, setGo] = useState("circle")
  const [victoryMessage, setVictoryMessage] = useState(null)

  //Message to show whose turn it is
  const message = "It is now " + go + "'s turn."

  console.log(cells)

  const checkScore = () => {
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
      if(circleWins){
        setVictoryMessage("Circle Wins!! ⭕")
        return
      }
    })

    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross")
      if(crossWins){
        setVictoryMessage("Cross Wins!! ❌")
        return
      }
    })
  }


  useEffect(() => {
    checkScore()

  }, [cells])

  return (
    <div className="app">
      
      <div className = "gameboard" >
          {cells.map((cell, index) => 
          <Cell
           key={index}
           id={index}
           cell={cell}
           setCells={setCells}
           go={go}
           setGo={setGo}
           cells={cells}
           victoryMessage={victoryMessage}
          />)}

      </div>
      
      
      
      <p>{victoryMessage || message}</p>
    </div>
  )
}

export default App
