const Hero = () => {
  return (
    <div className="flex px-36 py-20 justify-between">
      <div className="w-full">
        <h1 className="uppercase text-9xl font-extrabold">
          Your Feet Deserve The Best
        </h1>
        <p className="py-6 w-2/4 uppercase text-slate-950 text-x font-medium">
          Your Feet Deserve The Best and We're Here To Help You With Our Shoes.
          Your Feet Deserve The Best And We're Here To Help You With Our Shoes.
        </p>
        <div className="flex gap-6 mb-4">
          <button className="bg-red-600 rounded-none px-4 py-2 text-white font-semibold text-xl">
            Shop Now
          </button>
          <button className="border-2 border-black rounded-none px-4 py-2 font-semibold text-xl">
            Category
          </button>
        </div>
        <p className="py-3 text-x text-slate-800">Also Available On</p>
        <div className="flex gap-5 items-center">
          <img src="flipkart.png" alt="flipkart-image" />
          <img src="amazon.png" alt="amazon-image" />
        </div>
      </div>
      <div className="py-16">
        <img src="shoe_image.png" alt="Hero-image" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
