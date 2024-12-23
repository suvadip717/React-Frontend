interface diceProps {
  diceNumber: number;
  diceRoll: () => void;
}
const DiceRolle = ({ diceNumber, diceRoll }: diceProps) => {
  return (
    <div className="py-12" onClick={diceRoll}>
      <img src={`dice/dice_${diceNumber}.png`} alt="dice-image" />
    </div>
  );
};

export default DiceRolle;
