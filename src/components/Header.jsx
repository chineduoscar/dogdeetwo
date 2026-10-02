import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white py-4 px-5">
      <section className="max-w-300 mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src="./logo.png" alt="logo" className="w-15 h-10" />
          <span className="text-2xl font-bold">DogDee</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li className="text-lg hover:text-purple-600">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/adopt"}>Adopt</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="hidden md:block bg-purple-500 rounded-lg py-2 px-4 cursor-pointer text-white ">
            Adopt Now
          </button>

          <button className="md:hidden" onClick={handleMenuOpen}>
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </section>

      {isOpen && (
        <nav className="mt-3 md:hidden flex flex-col gap-4">
          <ul className="flex flex-col items-start gap-4">
            <li className="text-lg hover:text-purple-600">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="text-lg hover:text-purple-600">
              <Link to={"/adopt"}>Adopt</Link>
            </li>
          </ul>

          <button className="bg-purple-500 rounded-lg py-2 px-4 cursor-pointer text-white w-full">
            Adopt Now
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
