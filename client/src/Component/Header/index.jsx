import { CiLocationOn } from "react-icons/ci";
import { BiCaretDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <section className="w-full h-20 bg-gray-900 sticky top-0 z-50">
      <div className="h-full px-6 w-full mx-auto flex items-center justify-between gap-4">
        <div className="w-30 h-auto">
          <img src="/Images/logo.png" alt="Logo" />
        </div>
        <div className="flex items-center">
          <CiLocationOn className="text-white mr-2" />
          <div className="flex flex-col">
            <span className="text-white text-sm">Deliver to</span>
            <span className="capitalize text-sm text-white font-bold">
              INDIA
            </span>
          </div>
        </div>
        <div className="flex w-150 space-x-2">
          <input
            type="text"
            placeholder="Search Amazon product"
            className="h-full w-full outline-none bg-white border-none px-3 rounded-lg py-2 text-sm"
          />
          <button>
            <CiSearch className="bg-amber-400 cursor-pointer rounded-xs text-3xl p-1" />
          </button>
        </div>
        <div className="text-white">
          <p className="text-sm">Hello, Sign in</p>
          <div className="flex items-center">
            <p className="text-sm font-bold">Account & List</p>
            <BiCaretDown />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FiShoppingCart className="text-white text-4xl" />
          <p className="text-white font-bold">Cart</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
