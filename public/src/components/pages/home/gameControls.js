import Button from "./button";
import Knob from "./knob";
import DPad from "./dPad";
import Speaker from "./speaker";

const GameControls = ({ play, generation, togglePlay, reset }) => {
  return (
    <div
      style={{ height: 250 + "px" }}
      className={`self-start flex flex-row w-full
        rounded-bl-lg rounded-br-3xl bg-gray-400 relative`}
    >
      <DPad />

      <Knob label="A" text="" x={60} y={35} color="green" />
      <Knob label="B" text="" x={110} y={85} color="red" />

      <Button
        text={play ? "Pause" : "Start"}
        x={130}
        y={180}
        action={togglePlay}
      />
      <Button text="Reset" x={205} y={180} action={reset} />

      <div className="mt-1 ml-4 font-jose text-blue-800">{`Generation: ${generation}`}</div>

      <Speaker />
    </div>
  );
};

export default GameControls;
