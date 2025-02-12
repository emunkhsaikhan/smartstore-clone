import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
const Navbar = () => {
  return (
    <header>
      {/* TOPBAR SECTION */}
      <div className="bg-secondary_purple h-12 w-full flex justify-between items-center text-white px-4">
        <div className="flex items-center justify-center gap-6 font-bold">
          <div className="flex items-center gap-2 cursor-pointer">
            <FiPhoneCall />
            <span>7749-9999</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <TfiEmail />
            <span>info@smartdeal.mn</span>
          </div>
        </div>
        <h2 className="hover:text-[#424881]  transition duration-300 ease-in-out cursor-pointer">
          Хаяг байршил
        </h2>
      </div>
      {/* NAVBAR SECTION */}
    </header>
  );
};

export default Navbar;
