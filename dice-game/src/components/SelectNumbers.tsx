interface selectNumberProps {
  error: string;
  setError: (value: string) => void;
  selectNumber: number | undefined;
  setSelectNumber: (value: number) => void;
}
const SelectNumbers = ({
  error,
  setError,
  selectNumber,
  setSelectNumber,
}: selectNumberProps) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const numberHandler = (value: number) => {
    setSelectNumber(value);
    setError("");
  };
  return (
    <div>
      <p className="text-red-600 py-1">{error}</p>
      <div className="flex gap-4 py-2">
        {numbers.map((value, key) => (
          <div
            className={`border-2 border-black text-xl font-semibold px-7 py-5 items-center ${
              selectNumber === value
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
            key={key}
            onClick={() => numberHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectNumbers;
