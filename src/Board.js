
import Square from "./Square";
import './index.css'

function Board(prop) {

    const { squares, onClick } = prop;
    
    const renderSquares = (i) => {
        return (
            <Square num={squares[i]} onClick={() => onClick(i)}/>
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquares(0)}
                {renderSquares(1)}
                {renderSquares(2)}
            </div>
            <div className="board-row">
                {renderSquares(3)}
                {renderSquares(4)}
                {renderSquares(5)}
            </div>
            <div className="board-row">
                {renderSquares(6)}
                {renderSquares(7)}
                {renderSquares(8)}
            </div>
        </div>
    );
}

export default Board;
