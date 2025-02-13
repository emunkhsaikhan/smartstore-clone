import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="hidden 2xl:flex text-white w-full items-center flex-col gap-4 h-[320px] bg-secondary_purple pt-8 mt-10 ">
      <div className="flex items-start justify-between w-full px-10">
        <div className="flex items-start gap-2 flex-col">
          <h2 className="text-[16px] uppercase text-primary_blue">
            smartstore.mn
          </h2>
          <ul className="text-[13px] style-none flex flex-col items-start">
            <li className="footer-list">Бидний тухай</li>
            <li className="footer-list">Үйлчилгээний нөхцөл</li>
            <li className="footer-list">Нууцлалын бодлого</li>
            <li className="footer-list">Салбарын байршил</li>
            <li className="footer-list">Ажлын байр</li>
            <li className="footer-list">Санал хүсэлт</li>
          </ul>
        </div>
        <div className="flex items-start justify-start gap-8 flex-col">
          <h2 className="text-[16px] uppercase text-primary_blue">
            бүтээгдэхүүн үйлчилгээ
          </h2>
          <ul className="text-[13px] style-none flex flex-col items-start">
            <li className="footer-list">Ухаалаг утас</li>
            <li className="footer-list">Ухаалаг цаг</li>
            <li className="footer-list">Ухаалаг таблет</li>
            <li className="footer-list">Ухаалаг гэр ахуй</li>
            <li className="footer-list">Ухаалаг гал тогоо</li>
          </ul>
        </div>
        <div className="flex items-start justify-start gap-8 flex-col">
          <h2 className="text-[16px] uppercase text-primary_blue">
            Түргэн холбоос
          </h2>
          <ul className="text-[13px] style-none flex flex-col items-start">
            <li className="footer-list">Урамшуулалт хөтөлбөр</li>
            <li className="footer-list">Шинэ загвар 2024</li>
            <li className="footer-list">Зээлийн үйлчилгээ</li>
          </ul>
        </div>
        <div className="flex items-start justify-start gap-8 flex-col">
          <h2 className="text-[16px] uppercase text-primary_blue">
            Биднийг дагаарай
          </h2>
          <div className="flex items-start gap-4">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaYoutube className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex items-start justify-center flex-col gap-8">
          <div className="flex items-start gap-8 flex-col">
            <h2 className="text-[16px] uppercase text-primary_blue">
              Хаяг байршил
            </h2>
            <p className="text-[13px]">
              Сүхбаатар дүүрэг 1-р хороо хороо Хүүхдийн ордны ард "Central park
              tower" 1 давхарт
            </p>
          </div>
          <div className="flex items-start gap-8 flex-col">
            <h2 className="text-[16px] uppercase text-primary_blue">
              Холбоо барих
            </h2>
            <ul className="text-[13px] style-none flex flex-col items-start">
              <li className="footer-list">Утас: 7749-9999</li>
              <li className="footer-list">Имэйл: info@smartdeal.mn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-10">
        <p className="text-[12px]">© 2025. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
        <div>
          <img
            src="https://smartstore.mn/66923d97c4254663e02f19cc871bd045.svg"
            alt="footer logo"
            className="w-[72px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
