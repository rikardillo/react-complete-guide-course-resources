
export default function GameBoard({ onSelectSquare, board }) {
  
  return (
    <ol id="game-board">
      {board.map(
        (
          row,
          rowIndex // First parameter of map() Method is the element of the array to be mapped, the second parameter is the index
        ) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        )
      )}
    </ol>
  );
}
