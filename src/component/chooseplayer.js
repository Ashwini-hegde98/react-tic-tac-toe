import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
    startgame(e)
    {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return ( 
            <div>
                <form onSubmit={(e)=> this.startgame(e)}>
                    <label>
                        Player X
                        <input type="radio" name="player" value="X"></input>
                    </label>
                    <label>
                        Player O
                        <input type="radio" name="player" value="O"></input>
                    </label>
                   <input id="start" type="submit" value="start"/>
                </form>
            </div>
            
        )
    }
}
export default Player