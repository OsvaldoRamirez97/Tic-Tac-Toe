import { useState } from "react";
import { Board } from "./Board";
import '../App.css'


const Game = () =>{
    const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares : (string | null)[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo (nextMove : number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move ) => {
        const description = (move > 0) ? `Go to move # ${move}` : `Go to game start`;

        return (

            <li key={move}> 
                <button className="button-moves" onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay={handlePlay} />
                </div>
                <div className="game-moves">
                    <h1>Moves</h1>
                    <ol className="moves">{moves}</ol>
                </div>
            </div>
        </>
    )
}

export default Game;