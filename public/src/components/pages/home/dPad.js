import { useEffect, useState } from "react";

const DPad = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  return (
    <div className={`absolute left-10 top-10`}>
      <button
        onMouseOver={(e) => setUp(true)}
        onMouseLeave={(e) => setUp(false)}
        id="dpad-up"
        className={`mx-auto absolute left-10 w-5 h-10 bg-gray-800
        rounded-t border-t border-gray-400 transform duration-150 hover:translate-y-1
        ${down && "lift-up"}`}
      />
      <div
        id="dpad-horizontal"
        className={`relative flex flex-row absolute top-10 z-20`}
      >
        <button
          onMouseOver={(e) => setLeft(true)}
          onMouseLeave={(e) => setLeft(false)}
          id="dpad-left"
          className={`my-auto w-10 h-5 bg-gray-800 z-10
            border-b border-gray-700 rounded-l border-t ${
              right && "lift-left"
            }`}
        />
        <div className={`absolute w-10 h-5 bg-gray-900 z-0 rounded-l`} />
        <div
          className={`h-5 w-5 bg-gray-800 transform -translate-y-1
            flex justify-center items-center`}
        >
          <div className={`h-3 w-3 bg-gray-900 rounded-full`} />
        </div>
        <button
          onMouseOver={(e) => setRight(true)}
          onMouseLeave={(e) => setRight(false)}
          id="dpad-right"
          className={`my-auto w-10 h-5 bg-gray-800 z-10
            border-b border-gray-700 rounded-r border-t ${
              left && "lift-right"
            }`}
        />
        <div
          className={`absolute w-10 h-5 bg-gray-900 z-0 right-0 rounded-r`}
        />
      </div>
      <div
        style={{ top: 3.4 + "rem" }}
        className={`left-10 absolute w-5 h-10 bg-gray-900 z-0 rounded-b`}
      />
      <button
        onMouseOver={(e) => setDown(true)}
        onMouseLeave={(e) => setDown(false)}
        id="dpad-down"
        style={{ top: 3.2 + "rem" }}
        className={`mx-auto absolute left-10 w-5 h-10 bg-gray-800
          rounded-b border-b border-gray-700 z-10
          transform duration-150 hover:translate-y-1
          ${up && "lift-down"} `}
      />
    </div>
  );
};

export default DPad;
