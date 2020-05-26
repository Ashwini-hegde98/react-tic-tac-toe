import React, { Component } from 'react';
import Player from './chooseplayer'
import '../App.css';

class Status extends Component {
    handlesetPlayer(e){
        this.props.setPlayer(e)
    }
    reset(e) {
        
            this.props.board(e)
          
        
    }
    renderhtml(){
        if(this.props.winner){
            return (
                <div>
                    <h2>Winner is {this.props.winner}</h2>
                    <button type="reset"
                     onClick= {(e)  => {this.reset(e)}}>RESET</button>
                </div>
            )
        }
        else {
            return (this.props.player ?
            (
            <div>
            <h2>Next player is {this.props.player}</h2>
            <button type="reset"
            onClick= {(e)  => {this.reset(e)}}>RESET</button>
            </div>
            )   
            : <Player player={(e)=>this.handlesetPlayer(e)} />)

        }
    }
    render() {
        return (<div>{this.renderhtml()}</div>)
    }
}
export default Status