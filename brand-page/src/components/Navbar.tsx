const Navbar = () => {
  return (
    <nav className="flex h-20 items-center justify-between px-6">
      <div>
        <img src="brand_logo.png" alt="brnad-logo" />
      </div>
      <div className="flex gap-5 uppercase text-xl">
        <div>menu</div>
        <div>location</div>
        <div>about</div>
        <div>contact</div>
      </div>
      <button className="bg-red-600 rounded-none px-3 py-1 text-white">
        LogIn
      </button>
    </nav>
  );
};

export default Navbar;
