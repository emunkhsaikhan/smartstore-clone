import React, { useState } from "react";

// ICONS
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FcShipped } from "react-icons/fc";

interface PaymentChoiceCardProps {
  img: string;
  title: string;
  desc: string;
  logo: string;
  color: string;
}

const PaymentChoiceCard: React.FC<PaymentChoiceCardProps> = ({
  img,
  title,
  desc,
  logo,
  color,
}) => {
  const [showPaymentCard, setShowPaymentCard] = useState<boolean>(false);
  return (
    <section className="flex items-center gap-4">
      <div
        className="flex items-center gap-2 w-full justify-between cursor-pointer bg-gray-100 border border-gray-200 rounded-md p-2 mt-4"
        onClick={() => setShowPaymentCard(!showPaymentCard)}
      >
        <div className="flex items-center gap-2">
          <img src={img} alt="payment logo" width={42} height={42} />
          <div className="flex flex-col items-start">
            <p className="text-[12px] text-start leading-3">{desc}</p>
            <span className="text-[14px] font-semibold">
              powered by {title}
            </span>
          </div>
        </div>
        <GoArrowRight className={`cursor-pointer text-2xl`} />
      </div>

      {showPaymentCard && (
        <div className="fixed flex top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10 transition duration-300 ease-in-out">
          <div className="absolute top-0 right-0 max-[600px]:w-full max-[800px]:ml-32 w-[580px] h-full bg-white p-6 text-start">
            <button
              className={`flex items-center gap-2 `}
              onClick={() => setShowPaymentCard(!showPaymentCard)}
            >
              <GoArrowLeft
                className={`cursor-pointer text-3xl`}
                style={{ color }}
                onClick={() => setShowPaymentCard(false)}
              />
              <span className="text-sm font-semibold">Буцах</span>
            </button>
            <img src={logo} alt="payment logo" className="mt-8 h-12" />
            <ul className="border-t border-t-gray-200 border-t-dashed border-t-1px mt-4">
              <li className="flex items-center justify-between bg-[#f2f2f2] rounded-md p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://smartstore.mn/0d7c8acc888071cc7965beb3ec9eadb5.svg"
                    alt="1"
                  />
                  <p>Эхний төлөлт</p>
                </div>
                <span>424,750₮</span>
              </li>
              <li className="flex items-center justify-between bg-[#f2f2f2] rounded-md p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://smartstore.mn/36d23c1c959a615c7575df55fef56940.svg"
                    alt="2"
                  />
                  <p>2 дахь төлөлт</p>
                </div>
                <span>424,750₮</span>
              </li>
              <li className="flex items-center justify-between bg-[#f2f2f2] rounded-md p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://smartstore.mn/024e5dd946825f50a44ce8f5b53e3391.svg"
                    alt="3"
                  />
                  <p>3 дахь төлөлт</p>
                </div>
                <span>424,750₮</span>
              </li>
              <li className="flex items-center justify-between bg-[#f2f2f2] rounded-md p-3 mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://smartstore.mn/024e5dd946825f50a44ce8f5b53e3391.svg"
                    alt="4"
                  />
                  <p>Сүүлийн төлөлт</p>
                </div>
                <span>424,750₮</span>
              </li>
            </ul>
            <p className="text-[12px] mt-4 text-gray-600">
              *Дээрх төлөлтүүд нийт үнийн дүнг хуваасан болно. Ямар ч хүүгүй,
              шимтгэлгүй
            </p>
            <div className="border border-gray-300 border-1px border-dashed rounded-lg mt-8 p-6">
              <h2 className="text-xl font-bold">Заавар</h2>
              <ul
                className="list-disc mt-4 pl-4 custom-marker"
                style={
                  { "--custom-marker-color": color } as React.CSSProperties
                }
              >
                <li>Бараагаа сагсандаа нэмнэ.</li>
                <li>
                  <b>{title}</b> - д бүртгэлтэй утасны дугаараа оруулна.
                </li>
                <li>
                  Төлбөрийн нөхцөл дээрээс <b>{title}</b> сонгоно.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PaymentChoiceCard;
