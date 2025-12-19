import { FaBars } from "react-icons/fa";

function SubHeader() {
  return (
    <div className="w-full sticky top-20 z-40 bg-gray-700">
      <div className="flex p-2 text-sm text-white space-x-4 font-semibold px-6">
        <a className="hover:border" href="#">
          <div className="flex items-center space-x-1">
            <FaBars />
            <h3>All</h3>
          </div>
        </a>
        <a className="hover:border px-2" href="#"><h3>Today's Deal</h3></a>
        <a className="hover:border" href="#"><h3>Amazon MiniTV</h3></a>
        <a className="hover:border" href="#"><h3>Sell</h3></a>
        <a className="hover:border" href="#"><h3>Bestsellers</h3></a>
        <a className="hover:border" href="#"><h3>Mobiles</h3></a>
        <a className="hover:border" href="#"><h3>Customer Service</h3></a>
        <a className="hover:border" href="#"><h3>Electronics</h3></a>
        <a className="hover:border" href="#"><h3>New Releases</h3></a>
        <a className="hover:border" href="#"><h3>Home & Kitchen</h3></a>
        <a className="hover:border" href="#"><h3>Fashion</h3></a>
        <a className="hover:border" href="#"><h3>Amazon Pay</h3></a>
      </div>
    </div>
  );
}

export default SubHeader;
