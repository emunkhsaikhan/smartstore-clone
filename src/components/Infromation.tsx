import { useEffect, useState } from "react";
import { InformationArrays } from "./Arrays";
import clsx from "clsx";

const Infromation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const informationArray = InformationArrays;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);
  return (
    <section className="w-full mb-10">
      {/* GENERAL INFORMATION */}
      <div className="w-full 2xl:w-1/2 mt-8 p-4 flex items-center flex-col bg-white">
        <h1 className="text-[16px] text-start font-semibold">
          Үндсэн мэдээлэл
        </h1>
        {width < 992 ? (
          <div className="mt-2 py-2 rounded-md w-full">
            {informationArray.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  "text-[13px]  flex items-center justify-between p-2",
                  item.id % 2 === 0 && "bg-gray-200"
                )}
              >
                <h2 className="font-semibold text-start text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-start">{item.info}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-2 bg-[#f4f5f0] py-2 rounded-md">
            {informationArray.map((item) => (
              <div key={item.id} className="text-[13px] px-2 grid grid-cols-2">
                <h2 className="font-semibold text-start text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-start">{item.info}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full h-[40px] bg-[#f6f6f6]"> </div>
      {/* ADDITIONAL INFORMATION */}
      <div className="w-full h-auto mt-8 px-4 flex items-center flex-col max-w-[1300px] bg-white">
        <h1 className="text-[16px] text-start font-semibold">
          Нэмэлт мэдээлэл
        </h1>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/274922/original/213132132.jpg"
          alt="addition information"
          className="mt-4 px-4"
        />
      </div>
    </section>
  );
};

export default Infromation;
