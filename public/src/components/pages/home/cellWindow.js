import { useState, useEffect } from 'react';
import Button from '../../input/button.js';

const CellWindow = () => {
  // Create an array filled with 0's to represent the grid of cells
  const gridSize = 50;
  const [cells, setCells] = useState(new Array(gridSize*gridSize).fill({updated: 0, state: 0}));
  const [play, setPlay] = useState(false);
  const [generation, setGeneration] = useState(0);

  // Change the state of the cell at the given index
  const toggleCell = (index, event, hover=false) => {
    if (!play && (event.shiftKey || !hover)) {
      let newCells = cells.map(cell => {return {updated: cell.updated, state: cell.state}});
      newCells[index].state = newCells[index].state === 1 ? 0 : 1;
      setCells(newCells);
    }
  }

  // Produce an array of cell divs
  const renderCells = () => {
    return cells.map((cell, i) => (
      <div
        key={i}
        style={{
          background: cell.state === 1 ?
          `radial-gradient(
            rgb(
              ${(Math.abs(Math.sin(cell.updated +
                (Math.PI * 0.33 * cell.updated+1))) * 200)+50},
              ${(Math.abs(Math.sin(cell.updated +
                (Math.PI * 0.66 * cell.updated+1))) * 200)+50},
              ${(Math.abs(Math.sin(cell.updated +
                (Math.PI * 0.99 * cell.updated+1))) * 200)+50}
            ),
            rgb(0, 0, 0))` :
          'black'
        }}
        onClick={e => toggleCell(i, e)}
        onMouseOver={e => toggleCell(i, e, true)}
        className={`h-full w-full
          ${i === 0 && "rounded-tl"}
          ${i === gridSize-1 && "rounded-tr"}
          ${i === (gridSize*gridSize)-gridSize && "rounded-bl"}
          ${i === (gridSize*gridSize)-1 && "rounded-br"}`} />
    ));
  }

  // While play is active, produce a new generation of cells every second
  useEffect(() => {
    play && setTimeout(() => { updateCells(); }, 200);
  }, [play, cells]);

  // Produce the next generation of cells
  const updateCells = () => {
    let nextCells = cells.map(cell => {return {updated: cell.updated, state: cell.state}});;
    // Count the neighbors for each cell to determine if it should live or die
    nextCells.forEach((cell, index) => {
      let neighbors = 0;
      // Check the 8 neighbors based on their '2D' position
      if (cells[index - gridSize] && cells[index - gridSize].state) neighbors += 1;
      if (cells[index + gridSize] && cells[index + gridSize].state) neighbors += 1;
      if (cells[index - 1] && cells[index - 1].state) neighbors += 1;
      if (cells[index + 1] && cells[index + 1].state) neighbors += 1;
      if (cells[index + gridSize + 1] && cells[index + gridSize + 1].state) neighbors += 1;
      if (cells[index + gridSize - 1] && cells[index + gridSize - 1].state) neighbors += 1;
      if (cells[index - gridSize + 1] && cells[index - gridSize + 1].state) neighbors += 1;
      if (cells[index - gridSize - 1] && cells[index - gridSize - 1].state) neighbors += 1;
      // Cell dies from underpopulation
      if (cell.state === 1 && neighbors < 2) {
        nextCells[index].updated = generation;
        nextCells[index].state = 0;
      }
      // Cell dies from overpopulation
      else if (cell.state === 1 && neighbors > 3) {
        nextCells[index].updated = generation;
        nextCells[index].state = 0;
      }
      // Neighbor cells create new cell
      else if (cell.state === 0 && neighbors === 3) {
        nextCells[index].updated = generation;
        nextCells[index].state = 1;
      }
      // Otherwise cell is same as last time
      else nextCells[index].state = cell.state;
    });
    // Apply the updates to the next generation
    setGeneration(generation+1);
    setCells(nextCells);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="h-full p-4 mt-10">
        <div className="p-2 bg-gray-700 rounded-lg shadow-lg">
          <div className="sm:h-96 h-80 sm:w-96 w-80"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
             }}>
            {renderCells()}
          </div>
        </div>
      </div>

      <div>
        <p className="sm:inline hidden">Hold the shift key or click to draw cells.</p>
        <p className="sm:hidden inline">Click to draw cells.</p>
      </div>

      <div className="flex flex-row p-4 mb-10">
        <Button label={play ? `Generation: ${generation}` : "Start"}
          onClick={() => setPlay(!play)}
          buttonColor="bg-gradient-to-br from-blue-400 to-blue-300"
          borderColor="border-blue-600"
          extraClasses="mx-1" />
        <Button label="Reset"
          onClick={() => {
            setGeneration(0);
            setCells(new Array(gridSize*gridSize).fill({updated: 0, state: 0}))}
          }
          buttonColor="bg-gradient-to-br from-red-400 to-red-300"
          borderColor="border-red-600"
          disabled={play}
          extraClasses="mx-1" />
      </div>
    </div>


  )
}

export default CellWindow;
