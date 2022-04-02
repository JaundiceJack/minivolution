const Knob = ({ label, text, x, y, color = "green", action, disabled }) => {
  return (
    <div
      style={{ right: x + "px", top: y + "px" }}
      className={`absolute flex flex-row items-center`}
    >
      <div className={`absolute rounded-full bg-${color}-800 w-10 h-10 z-0`} />
      <button
        onClick={!disabled && action}
        className={`rounded-full bg-${color}-500 w-10 h-10 z-10 outline-none
        transform duration-150 -translate-y-1 hover:translate-y-0
        ${disabled && " disabled translate-y-0 opacity-50"}`}
      >
        {label}
      </button>

      <p className="absolute text-yellow-500 font-bold font-jose left-12 ">
        {text}
      </p>
    </div>
  );
};

export default Knob;
