import firebaseImg from "../assets/firebase.svg";

const Navbar = () => {
  return (
    <div className="my-4 flex h-[50px] items-center justify-center gap-3 rounded-lg bg-white text-xl font-medium">
      <img src={firebaseImg} alt="firebase-image" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
