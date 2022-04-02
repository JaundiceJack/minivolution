import Game from "./game.js";
import Instructions from "./instructions.js";

const Home = () => {
  return (
    <div className="h-full flex xl:flex-row flex-col justify-center relative mt-5">
      <Game />
      <Instructions />
    </div>
  );
};

export default Home;
