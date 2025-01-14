import '../App.css';
import '../index.css'


export const Square  = ({ value, onSquareClick } : {value : (string | null), onSquareClick : (x : string | null)  => void}) => {
    return (
        <button className="square" onClick={() => onSquareClick(value)}>
            { value }
        </button>
    )
}

