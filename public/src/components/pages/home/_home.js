import Game from "./game.js";
import Instructions from "./instructions.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex xl:flex-row flex-col justify-center relative mt-5 mb-5">
      <Link
        to="/three"
        className="self-start mr-4 bg-green-400 hover:bg-green-600 p-2 rounded-full"
      >
        3
      </Link>
      <Game />
      <Instructions />
    </div>
  );
};

export default Home;
