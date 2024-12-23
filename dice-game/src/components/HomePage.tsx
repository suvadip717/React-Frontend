import { useState } from "react";
import DiceRolle from "./DiceRolle";
import SelectNumbers from "./SelectNumbers";
import Rules from "./Rules";

const HomePage = () => {
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);
  const [selectNumber, setSelectNumber] = useState<number | undefined>();
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);

  const generateNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = () => {
    if (!selectNumber) {
      setError("You not select any Number");
      return;
    }
    const newNumber = generateNumber(1, 7);
    setDiceNumber(newNumber);

    if (selectNumber === newNumber) {
      setScore((prev) => prev + diceNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="px-20 py-14 h-[100vh]">
      <div className="flex justify-between py-6">
        <div>
          <h1 className="text-8xl font-medium">{score}</h1>
          <p className="text-xl font-medium">Total Score</p>
        </div>
        <div className="">
          <SelectNumbers
            error={error}
            setError={setError}
            selectNumber={selectNumber}
            setSelectNumber={setSelectNumber}
          />
          <p className="flex justify-end text-xl font-semibold">
            Select Number
          </p>
        </div>
      </div>
      <div className="grid justify-items-center text-center">
        <DiceRolle diceNumber={diceNumber} diceRoll={diceRoll} />
        <button
          className="px-10 py-3 border-2 border-black rounded-md text-xl font-semibold"
          onClick={resetScore}
        >
          Reset Score
        </button>
        <button
          className="px-10 py-3 border-2 border-black rounded-md text-xl font-semibold my-4 bg-black text-white"
          onClick={() => setRules((hide) => !hide)}
        >
          Show Rules
        </button>
      </div>
      <div className="flex justify-center">{rules ? <Rules /> : null}</div>
    </div>
  );
};

export default HomePage;
