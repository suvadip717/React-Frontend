import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import siteLogo from "./assets/Foody Zone.svg";

interface FoodItem {
  name: string;
  price: number;
  about: string;
  image: string;
  type: string;
}

function App() {
  const baseUrl = "http://localhost:3000";
  const [selectBtn, setSelectBtn] = useState("all");
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filterData, setFilterData] = useState<FoodItem[]>([]);

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  useEffect(() => {
    fetch(baseUrl)
      .then((data) => data.json())
      .then((data: FoodItem[]) => {
        setFoodData(data);
        setFilterData(data);
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);

  const searchFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    const serchValue = e.target.value.toLowerCase();

    if (serchValue === "") {
      setFilterData(foodData);
    }
    const filter = foodData?.filter((food) =>
      food.name.toLowerCase().includes(serchValue)
    );
    setFilterData(filter);
  };

  const filterFood = (type: string) => {
    if (type === "all") {
      setSelectBtn("all");
      setFilterData(foodData);
      return;
    }

    const filter = foodData?.filter((food) =>
      food.type.toLowerCase().includes(type)
    );
    setFilterData(filter);
    setSelectBtn(type);
  };

  return (
    <div className="bg-zinc-600">
      <nav className="bg-zinc-600 text-white h-auto sm:h-['88vh'] px-4 sm:px-20 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <img src={siteLogo} alt="site-logo" className="w-30 sm:w-auto" />
          </div>
          <input
            type="text"
            placeholder="Search Food"
            className="placeholder:text-white p-2 bg-transparent border-red-600 border-2 rounded-md focus:outline-none mt-4 sm:mt-0 sm:ml-4"
            onChange={searchFood}
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-4 sm:pt-8">
          {filterBtns.map((item) => (
            <button
              className={`px-3 py-1 rounded-md transition hover:bg-white hover:text-black focus:outline-none  ${
                selectBtn === item.type
                  ? "bg-white text-black"
                  : "bg-red-600 text-white"
              }`}
              key={item.type}
              onClick={() => {
                filterFood(item.type);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <Body baseUrl={baseUrl} foodData={filterData} />
    </div>
  );
}

export default App;
