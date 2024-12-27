interface FoodItem {
  name: string;
  price: number;
  about: string;
  image: string;
  type: string;
}
interface bodyProp {
  foodData: FoodItem[];
  baseUrl: String;
}
const Body = ({ foodData, baseUrl }: bodyProp) => {
  return (
    <div className="bg-bodyImg bg-no-repeat bg-cover bg-center  sm:h-[88vh] h-100vh overflow-hidden">
      <div className="flex flex-wrap text-white gap-6 justify-center px-10 py-12 sm:p-28">
        {foodData.map(({ name, price, about, image }) => (
          <div
            key={name}
            className="backdrop-blur-3xl border-2 border-gray-50 p-4 flex gap-4 rounded-2xl w-full sm:w-[45%] lg:w-1/4"
          >
            <img
              src={`${baseUrl}${image}`}
              alt="item-image"
              className="w-3/4"
            />
            <div className="my-auto">
              <h1 className="text-lg sm:text-xl font-semibold py-2">{name}</h1>
              <p className="text-sm sm:text-base">{about}</p>
              <div className="mt-10 sm:mt-6 flex justify-end">
                <button className="text-white bg-red-500 px-3 py-1 rounded-md">
                  ₹{price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
