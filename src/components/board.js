import React from 'react';

import StartComponent from './startComponent';
import GuessComponent from './guessComponent';
import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            gameState: "0",
           
        }
        this.resetGame = this.resetGame.bind(this)
    }

    setCurrentNumber() {
        var number = Math.round(Math.random() * 100);

        this.setState({
            currentNumber: number,
            gameState: "1"
        });
    }
    resetGame(){
        this.setState({
            gameState: "0"
        })
    }

    render() {
        if (this.state.gameState === "0") {
            return (
                <div className="board">
                    <h2>Hot and Cold Game</h2>
                    <span>Click new game to randomly generate a number between 0 and 100! </span>
                    <span>{<br />}</span>
                    <StartComponent pickNumber={e => this.setCurrentNumber()} />
                </div>
            );
        }
        else if(this.state.gameState === "1"){
            return (
                <div className="board">
                    <h2>Hot and Cold Game</h2>
                    <span>Guess a number between 0 and 100</span>
                    <GuessComponent currentNumber ={this.state.currentNumber} resetGame={this.resetGame} gameState = {this.state.gameState}/>               
                </div>
            );
        }
    }
}
