const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function () {
  return (
    <ol id="game-board">
      {initialGameBoard.map(
        (
          row,
          rowIndex // First parameter of map() Method is the element of the array to be mapped, the second parameter is the index
        ) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        )
      )}
    </ol>
  );
}
