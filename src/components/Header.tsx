// ICONS
import { GoArrowLeft } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="2xl:hidden block w-full h-[50px] bg-primary_blue flex justify-between items-center px-4">
      <div className="flex justify-between items-center gap-4">
        <GoArrowLeft className="cursor-pointer text-3xl" />
        <div className="flex flex-col items-start justify-center text-white">
          <h1 className="text-[15px]">Infinix GT20 Pro Edition 12/256GB</h1>
          <p className="text-[12px]">Ухаалаг утас</p>
        </div>
      </div>
      <button className="relative">
        <IoCartOutline className="text-3xl" />
        <span className="absolute bottom-0 right-0 text-[12px] bg-primary_blue text-white w-[15px] h-[15px] rounded-full flex items-center justify-center">
          0
        </span>
      </button>
    </div>
  );
};

export default Header;
