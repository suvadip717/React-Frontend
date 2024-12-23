interface startProps {
  toggle: () => void;
}
const StarterPage = ({ toggle }: startProps) => {
  return (
    <div className="flex justify-between w-4/5 mx-auto h-[100vh] items-center">
      <div className="w-full">
        <img src="dices_hero.png" alt="hero-image" />
      </div>
      <div className="w-full">
        <h1 className="text-9xl font-bold uppercase flex justify-end">
          Dice Game
        </h1>
        <div className="flex justify-end my-5">
          <button
            className="py-3 px-16 text-xl rounded-lg items-center bg-black text-white border-black border-2 hover:bg-transparent hover:text-black"
            onClick={toggle}
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarterPage;
