const Instructions = () => {
  return (
    <div
      className={`self-center bg-instructions w-80 sm:w-104 rounded-lg
    xl:absolute right-4 top-14 p-8`}
    >
      <h1
        className={`font-bold bg-clip-text text-transparent text-2xl text-center
      bg-gradient-to-br from-green-400 to-indigo-400 mb-6`}
      >
        MiniVolution
      </h1>
      <p className="text-white mb-4">
        This is an implementation of Conway's Game of Life. Click or hold shift
        to draw cells on the screen, then click start to watch them grow into
        complex patterns or die out.
      </p>
      <h2 className="text-white font-semibold">Rules:</h2>
      <ul className="text-white list-disc ml-4">
        <li>Cells with 2 to 3 neighbors live to the next generation.</li>
        <li>Cells with 1 or less die from underpopulation.</li>
        <li>Cells with 4 or more die from overpopulation.</li>
        <li>Empty spaces with exactly 3 neighbors populate with a new cell.</li>
      </ul>
    </div>
  );
};

export default Instructions;
