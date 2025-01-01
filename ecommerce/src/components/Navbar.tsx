import { FaApple, FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { NavbarData } from "../data/MockData";

const Navbar = () => {
  return (
    <nav className="text-white py-5 px-8">
      <div className="flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-2 text-3xl font-semibold">
          <FaApple />
          Airpods Max
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block text-base py-2 uppercase px-3"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>
        {/* Hamburger menu section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
