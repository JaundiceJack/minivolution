const GameWindow = ({ size, cells, toggleCell }) => {
  // Produce an array of cell divs
  const renderCells = () => {
    return cells.map((cell, i) => (
      <div
        key={i}
        style={{
          background:
            cell.state === 1
              ? `radial-gradient(
            rgb(
              ${((Math.sin(cell.updated) + 1) / 2) * 200 + 50},
              ${
                ((Math.sin(cell.updated + (2 * Math.PI) / 3) + 1) / 2) * 200 +
                50
              },
              ${
                ((Math.sin(cell.updated + (4 * Math.PI) / 3) + 1) / 2) * 200 +
                50
              }
            ),
            rgb(0, 0, 0))`
              : "black",
        }}
        onClick={(e) => toggleCell(i, e)}
        onMouseOver={(e) => toggleCell(i, e, true)}
        className={`h-full w-full rounded-full`}
      />
    ));
  };

  return (
    <div className="h-full w-full rounded-t-xl">
      <div className="pt-6 bg-gray-400 rounded-t-xl shadow-lg relative">
        <div className="absolute left-6 top-0 h-6 w-2 bg-gray-500 opacity-25 border-t  border-white" />
        <div className="absolute right-6 top-0 h-6 w-2 bg-gray-500 opacity-25 border-t  border-white" />
        <div className="absolute left-12 top-1 h-4 w-16 bg-gray-500 opacity-25 rounded-full border-b border-white" />
        <div className="w-full h-2 bg-gray-500 mb-2 opacity-25 border-r border-l border-white border-b" />
        <div className="mx-4 sm:px-7 py-4 bg-gray-600 rounded-xl rounded-br-3xl">
          <div
            className="h-80 w-80 bg-black rounded-lg mx-auto"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, 1fr)`,
              gridTemplateRows: `repeat(${size}, 1fr)`,
            }}
          >
            {renderCells()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWindow;
