import './index.css'

function Square(prop) { 
    const { num, onClick } = prop;
    
    return (
        <button className="square" onClick={onClick}>
            {num}
        </button>
    );
}

export default Square;