import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
// COMPONENTS
import PaymentChoiceCard from "./PaymentChoiceCard";
import { PaymentChoices } from "./Arrays";
import { FcShipped } from "react-icons/fc";

// const images = [
//   "https://cdnp.cody.mn/spree/images/2333363/large/gt20_pro_bleu.png",
//   "https://cdnp.cody.mn/spree/images/2333364/large/gt20_pro_silver.png",
// ];

type Product = {
  images: string[];
  title: string;
  spec: string;
  category: "Ухаалаг утас" | "Техника";
  price: string;
};
const products: Product[] = [
  {
    images: [
      "https://cdnp.cody.mn/spree/images/2333363/large/gt20_pro_bleu.png",
      "https://cdnp.cody.mn/spree/images/2333364/large/gt20_pro_silver.png",
    ],
    title: "Infinix GT20 PRO PUBGM Edition",
    spec: "12/256GB",
    category: "Ухаалаг утас",
    price: "2.499.000₮",
  },
];

const paymentChoices = PaymentChoices;

const ProductCard: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-w flex flex-col 2xl:flex-row items-start justify-between mt-8">
      {/* IMAGE */}
      {width < 992 ? (
        // MOBILE SWIPER ----------------------------------------------------
        <div className="w-full mx-auto">
          <Swiper
            modules={[Pagination, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            thumbs={{
              swiper: thumbsSwiper,
            }}
          >
            {products[0].images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Product ${index}`}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // DESKTOP SWIPER ----------------------------------------------------
        <div className="w-1/2 mx-auto">
          <Swiper
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            thumbs={{
              swiper: thumbsSwiper,
            }}
            className="border border-gray-300 border-1px"
          >
            {products[0].images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Product ${index}`}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={products[0].images.length}
            watchSlidesProgress
            className="mt-2 cursor-pointer "
          >
            {products[0].images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="border border-gray-300 border-1px "
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 object-cover border rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* DESCRIPTION */}
      <div className="flex flex-col items-start justify-center w-full 2xl:w-1/2 px-4 top-0">
        <h1 className="2xl:text-[22px] text-[16px] font-semibold uppercase flex items-start 2xl:flex-col">
          {products[0].title}&nbsp;
          <p>{products[0].spec}</p>
        </h1>
        <p className="2xl:text-[16px] text-[13px] flex items-start flex-col 2xl:flex-row">
          {products[0].category}&emsp;
          <span className="text-[14px] text-gray-400">
            {width < 992 && (
              <span className="text-black">Барааны код:&emsp;</span>
            )}
            #infinix-gt20-pro
          </span>
        </p>
        <p className="text-[14px] mt-12">Онлайн авах үнэ:</p>
        <p className="text-[30px] font-bold">{products[0].price}</p>
        <div className="mt-4 w-full">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={products[0].images.length}
            watchSlidesProgress
            className="mt-2 cursor-pointer "
          >
            {products[0].images.map((src, index) => (
              <SwiperSlide key={index} className="">
                <img
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="2xl:w-16 2xl:h-16 w-10 h-10 object-cover border border-gray-300 border-1px rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* PAYMENT METHOD */}
        <div className="flex flex-col">
          {paymentChoices.map((choice) => (
            <PaymentChoiceCard
              key={choice.id}
              img={choice.img}
              title={choice.title}
              desc={choice.desc}
              logo={choice.logo}
              color={choice.color}
            />
          ))}
          <div className="flex items-center gap-4 bg-[#f4f5f0] border border-gray-200 rounded-md p-2 mt-4">
            <FcShipped className={`cursor-pointer text-3xl`} />
            <div className="flex flex-col items-start">
              <p className="text-[14px] italic">Хүргэлтийн нөхцөл</p>
              <p className="text-[14px] ">
                Бэлэн бараа <span className="text-red-500">24-48</span> цагийн
                ботор хүргэгдэнэ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
