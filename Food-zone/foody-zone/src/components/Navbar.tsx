// import { useState } from "react";
import siteLogo from "../assets/Foody Zone.svg";
interface navbarProp {
  selectBtn: String;
  setSelectBtn: (value: string) => void;
}

const Navbar = ({ selectBtn, setSelectBtn }: navbarProp) => {
  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  return (
    <nav className="bg-zinc-600 text-white h-auto sm:h-44 px-4 sm:px-20 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <img src={siteLogo} alt="site-logo" className="w-30 sm:w-auto" />
        </div>
        <input
          type="text"
          placeholder="Search Food"
          className="placeholder:text-white p-2 bg-transparent border-red-600 border-2 rounded-md focus:outline-none mt-4 sm:mt-0 sm:ml-4"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center pt-4 sm:pt-8">
        {filterBtns.map((item) => (
          <button
            className={`px-3 py-1 rounded-md transition hover:bg-white hover:text-black focus:outline-none  ${
              // active === item.type
              selectBtn === item.type
                ? "bg-white text-black"
                : "bg-red-600 text-white"
            }`}
            key={item.type}
            onClick={() => {
              setSelectBtn(item.type);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
