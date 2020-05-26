import React,{ Component } from 'react';

import Status from './component/status'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      board: Array(9).fill(null),
      player:null,
      winner:null
    }
  }

  winnerdeclare() {
    let winstate=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let index=0; index< winstate.length;index++)
    {
      const [a,b,c]= winstate[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state
        .board[a] === this.state.board[c] )
        {
         // alert(this.state.player+" won");
          this.setState({
            winner:this.state.player
          })

        }
    }

  }

  handleclick(index) {
    let newBoard=this.state.board;
    if(newBoard[index] === null && this.state.winner===null && this.state.player)
    {
    newBoard[index]=this.state.player;
    this.setState({
      board:newBoard,
      player: this.state.player === "X" ? "O":"X"
    })
    this.winnerdeclare();
  }
  let board=this.state.board.filter((box)=> box === null)
  if(board.length === 0 && this.state.winner === null)
  {
    alert('draw');
    this.reset();

  }

 
  }
  setPlayer(player){
    console.log(player)
    this.setState({
      player:player
    })
  }
  renderBoard(){
    return  (this.state.board.map((box,index)=> 
    <div className="box" key={index} onClick={(e)=> this.handleclick(index)} >{box}</div> ))
  }

  reset(e) {
    this.setState({
      board: Array(9).fill(null),
      player:null,
      winner:null
    })
  }

  render() {    
  return (
    <div className="container" id="root">
      <h1>Tic-Tac-Toe</h1>
      <Status 
      player={this.state.player} 
      setPlayer={(e)=>this.setPlayer(e)} 
      winner={this.state.winner}
      board={(e) => this.reset(e)} />
    <div className="board">
      {this.renderBoard()}
    </div>
    </div>
  )
}
}

export default App;
