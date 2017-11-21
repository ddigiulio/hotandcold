import React from 'react';
import StartComponent from './startComponent'
import './guessComponent.css';

export default class GuessComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            guesses: [],
           
        }
        this.winGame = this.winGame.bind(this)
    }

    onSubmit(event) {

        event.preventDefault();
        const text = this.textInput.value;
       
        if (text) {
            this.guessNumber(text);
        }
        this.textInput.value = '';
    }
     
    difference(guess, number){
        return Math.abs(guess-number);
    }

     message(difference){
        var string=""
        if(difference === 0){
            string = "You won";
            return string
        }
        else if (difference > 10){
            string = "Cold";
            return string;
        }
        else if (difference <= 10)
        {   string = "Hot"
            return string;
        }
    }

    guessNumber(value) {

        this.setState(
            {
                guesses: [...this.state.guesses, value],
                message: this.message(this.difference(value, this.props.currentNumber))
            }
        )
        
    }

    winGame (){
        this.props.resetGame();
        this.setState({
            message: ""
        })
    }
  
    render() {
        console.log(this.state.message);
        if(this.state.message === "You won")
        {   
            return( <div>
            <span>{this.state.message} with {this.state.guesses.length} guesses!</span>
            <button onClick ={this.winGame}>New Game!</button>
            </div>)
           
        }

        return (
            <div>
                <form className="guess" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" ref={input => this.textInput = input} />
                    <input type="submit" value="Submit" />
                </form>
                <span>{this.state.message}</span>
            </div>
        );
    }

};
