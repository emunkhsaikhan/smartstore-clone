import { useEffect, useState } from "react";
// ICONS
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoIosMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import clsx from "clsx";
const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="hidden 2xl:flex w-full flex-col mx-auto relative mb-[126px]">
      {/* TOPBAR SECTION */}
      <div
        className={clsx(
          "bg-secondary_purple h-10 w-full transition-transform duration-300 flex items-center justify-center text-[13px] text-white px-4",
          isHidden ? "-translate-y-[100%]" : "translate-y-0"
        )}
      >
        <div className="flex justify-between items-center w-full max-w-[1300px]">
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
      </div>
      {/* NAVBAR SECTION */}
      <div
        className={clsx(
          "fixed z-5 bg-white w-full transition-transform duration-300 ease top-10",
          isHidden ? "-translate-y-10" : "translate-y-0"
        )}
      >
        <section className="w-full h-[76px] flex items-center justify-center px-4 ">
          <div className="flex items-center justify-between w-full max-w-[1300px]">
            {/* MENU & LOGO */}
            <div className="h-full flex items-center gap-6">
              <button className="cursor-pointer">
                <IoIosMenu className="w-[50px] h-[34px] text-white bg-primary_blue rounded px-3" />
              </button>
              <img
                src="https://smartstore.mn/b9ddcfafdb3695f27ce887504016455d.png"
                alt="logo"
                className="w-[160px] h-[33px]"
              />
            </div>
            {/* SEARCHBAR */}
            <form className="flex">
              <button className="w-[50px] h-[40px] text-primary_blue p-[4px]">
                <IoMdSearch className="w-full h-full text-bold" />
              </button>
              <input
                type="text"
                placeholder="Эндээс бүхнийг хайж олох..."
                className="w-full h-[40px] text-[#424881] px-4"
              />
            </form>
            {/* ICONS & PROFILE */}
            <section className="flex items-center gap-12">
              {/* ICONS */}
              <div className="flex items-center gap-6">
                <button className="w-[30px] h-[30px] p-1 navbar-button">
                  <LuWallet className="w-full h-full icon neon" />
                </button>
                <button className="w-[30px] h-[30px] p-1 navbar-button">
                  <FaRegHeart className="w-full h-full icon neon" />
                </button>
                <button className="w-[30px] h-[30px] p-1 navbar-button relative">
                  <BsHandbag className="w-full h-full icon neon" />
                  <span className="absolute bottom-0 right-0 text-[12px] bg-primary_blue text-white w-[15px] h-[15px] rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
              {/* PROFILE */}
              <button className="flex items-center gap-2 h-[30px] p-1 navbar-button group">
                <PiUserCircleFill className="h-full w-full icon neon" />
                <span className="uppercase text-[13px] font-normal text-[#444444] group-hover:text-white">
                  Нэвтрэх
                </span>
              </button>
            </section>
          </div>
        </section>
        {/* NAVBAR END */}

        {/* BOTTOM BAR START */}
        <section className="w-full h-[50px] flex items-center justify-center px-4 shadow-[rgba(0, 0, 0, 0.09)] shadow-lg">
          <div className="flex items-center justify-between w-full h-full max-w-[1300px]">
            {/* LINKS */}
            <div className="flex items-center justify-left gap-8 w-full h-full text-[13px] uppercase text-secondary_purple font-bold">
              <Link to={"/"} className="links">
                Хямдралтай
              </Link>
              <Link to={"/"} className="links">
                Шинээр ирсэн
              </Link>
              <Link to={"/"} className="links">
                Лизинг
              </Link>
              <Link to={"/"} className="links">
                Бүх брэнд
              </Link>
            </div>
            {/* BUTTON */}
            <div className="links">
              <button className="w-[83px] h-[36px] font-bold uppercase text-[13px] text-white bg-primary_blue rounded">
                Заавар
              </button>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
