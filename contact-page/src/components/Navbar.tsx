const Navbar = () => {
  return (
    <div className="flex h-20 items-center px-10 justify-between">
      <img src="brand_logo.png" alt="page-logo" />
      <div className="flex gap-8 text-xl font-medium">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
