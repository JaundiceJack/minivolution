import { useState, useEffect } from "react";
import GameWindow from "./gameWindow.js";
import GameControls from "./gameControls.js";

const Game = () => {
  // Create an array filled with 0's to represent the grid of cells
  const gridSize = 50;
  const [cells, setCells] = useState(
    new Array(gridSize * gridSize).fill({ updated: 0, state: 0 })
  );
  const [play, setPlay] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(200);

  // Change the state of the cell at the given index
  const toggleCell = (index, event, hover = false) => {
    if (!play && (event.shiftKey || !hover)) {
      let newCells = cells.map((cell) => {
        return { updated: cell.updated, state: cell.state };
      });
      newCells[index].state = newCells[index].state === 1 ? 0 : 1;
      setCells(newCells);
    }
  };

  // While play is active, produce a new generation of cells every 0.2 seconds
  useEffect(() => {
    play &&
      setTimeout(() => {
        updateCells();
      }, speed);
  }, [play, cells]);

  // Set a default cell pattern
  useEffect(() => {
    let initialCells = cells.map((cell) => {
      return { updated: cell.updated, state: cell.state };
    });
    initialCells[672].state = 1;
    initialCells[722].state = 1;
    initialCells[772].state = 1;
    initialCells[724].state = 1;
    initialCells[673].state = 1;
    initialCells[723].state = 1;
    initialCells[773].state = 1;
    initialCells[774].state = 1;
    initialCells[775].state = 1;
    initialCells[725].state = 1;
    initialCells[675].state = 1;
    initialCells[676].state = 1;
    initialCells[726].state = 1;
    initialCells[776].state = 1;
    setCells(initialCells);
  }, []);

  // Produce the next generation of cells
  const updateCells = () => {
    let nextCells = cells.map((cell) => {
      return { updated: cell.updated, state: cell.state };
    });
    // Count the neighbors for each cell to determine if it should live or die
    nextCells.forEach((cell, index) => {
      let neighbors = 0;
      // Check the 8 neighbors based on their '2D' position
      if (cells[index - gridSize] && cells[index - gridSize].state)
        neighbors += 1;
      if (cells[index + gridSize] && cells[index + gridSize].state)
        neighbors += 1;
      if (cells[index - 1] && cells[index - 1].state) neighbors += 1;
      if (cells[index + 1] && cells[index + 1].state) neighbors += 1;
      if (cells[index + gridSize + 1] && cells[index + gridSize + 1].state)
        neighbors += 1;
      if (cells[index + gridSize - 1] && cells[index + gridSize - 1].state)
        neighbors += 1;
      if (cells[index - gridSize + 1] && cells[index - gridSize + 1].state)
        neighbors += 1;
      if (cells[index - gridSize - 1] && cells[index - gridSize - 1].state)
        neighbors += 1;
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
    setGeneration(generation + 1);
    setCells(nextCells);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center
      sm:m-0 mx-3 sm:mb-0 mb-10 container-shadow rounded-xl rounded-br-3xl`}
    >
      <GameWindow cells={cells} toggleCell={toggleCell} size={gridSize} />

      <GameControls
        play={play}
        generation={generation}
        togglePlay={() => setPlay(!play)}
        reset={() => {
          setPlay(false);
          setTimeout(() => {
            setGeneration(0);
            setCells(
              new Array(gridSize * gridSize).fill({ updated: 0, state: 0 })
            );
          }, speed);
        }}
      />
    </div>
  );
};

export default Game;
