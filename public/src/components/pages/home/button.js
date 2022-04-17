const Button = ({ text, x, y, action, disabled }) => {
  return (
    <div
      style={{ left: x + "px", top: y + "px", transform: "rotate(-30deg)" }}
      className="absolute flex flex-col"
    >
      <button
        onClick={action}
        className={`w-14 h-4 rounded-full bg-gradient-to-b
        from-gray-700 via-gray-600 to-gray-700`}
      ></button>
      <p className="mx-auto">{text}</p>
    </div>
  );
};

export default Button;
