export const PaymentChoices = [
  {
    id: 1,
    title: "TDB",
    desc: "Та зээлийн нөхцөлөөр энэхүү барааг авах боломжтой.",
    color: "#007aff",
    img: "https://smartstore.mn/4e99cdeef851d5807f3122d1ba91be57.png",
    logo: "https://smartstore.mn/4e99cdeef851d5807f3122d1ba91be57.png",
  },
  {
    id: 2,
    title: "Smart Easy Leasing",
    desc: "Та энэхүү барааг Smart Easy Leasing ББСБ-ын шуурхай зээлээр авах боломжтой.",
    color: "#007aff",
    img: "https://smartstore.mn/08458d22e13860c7f997d0b19f3ae671.png",
    logo: "https://smartstore.mn/08458d22e13860c7f997d0b19f3ae671.png",
  },
  {
    id: 3,
    title: "Lendmn",
    desc: "Storepay үйлчилгээг ашиглан төлбөрөө 4 хуваан төлөх боломжтой.",
    color: "#ff6600",
    img: "https://smartstore.mn/a319615dbb1af0c8cc87b33fea85b89f.svg",
    logo: "https://smartstore.mn/c983c4febc787abe466a7c2bfa294dc4.svg",
  },
  {
    id: 4,
    title: "Storepay",
    desc: "Storepay үйлчилгээг ашиглан төлбөрөө 4 хуваан төлөх боломжтой.",
    color: "#1d73ec",
    img: "	https://smartstore.mn/ceefda89e0025ec929a6d0f4f25b2368.png",
    logo: "https://smartstore.mn/5592acd71b2a7fdc9c2fddf442ec427d.png",
  },
  {
    id: 5,
    title: "PocketZERO",
    desc: "Урьдчилгаагүй,шимтгэлгүй 30-90 хоногт 2-6 хувааж төл.",
    color: "#ec3155",
    img: "https://smartstore.mn/ebc7f6cd98d21d6d5c94d06e19059ff9.png",
    logo: "https://smartstore.mn/378027a3a5c3f22d25f94496bf3284c2.png",
  },
  {
    id: 6,
    title: "Pick n Pay",
    desc: "Хүүгүй, шимтгэлгүй 5 хуваан төл, Худалдан авалт бүрт Ардкойны урамшуулалтай",
    color: "#ec3155",
    img: "https://smartstore.mn/3a5cb1c4b3817c79365bdcb2a5871a91.png",
    logo: "https://smartstore.mn/c27142acba264c9bf1fdbaa15d7f55e5.png",
  },
  {
    id: 7,
    title: "GOLOMT BANK",
    desc: "Та энэхүү барааг ямар нэгэн бичиг баримт бүрдүүлж, банкны салбарт очихгүйгээр цахим зээлийн үйлчилгээгээр авах боломжтой.",
    color: "#7e88f2",
    img: "https://smartstore.mn/9fb51f605bbc34212bbc4adb8ee15577.svg",
    logo: "https://smartstore.mn/9160712cce601f26752081ceedaadbdd.svg",
  },
];

let infoID: number = 1;
type Information = {
  id: number;
  title: string;
  info: string;
};
export const InformationArrays: Information[] = [
  {
    id: infoID++,
    title: "Батерей",
    info: "4001-5000 mah",
  },
  {
    id: infoID++,
    title: "Дэлгэцийн хэмжээ",
    info: "67.8 inch",
  },
  {
    id: infoID++,
    title: "Камерын төрөл",
    info: "Triple",
  },
  {
    id: infoID++,
    title: "Камера видео",
    info: "1080p",
  },
  {
    id: infoID++,
    title: "Үйлдлийн систем",
    info: "Android",
  },
  {
    id: infoID++,
    title: "Санах ой",
    info: "12GB",
  },
  {
    id: infoID++,
    title: "Селфи камера төрөл",
    info: "Single",
  },
  {
    id: infoID++,
    title: "Селфи видео",
    info: "1080p",
  },
  {
    id: infoID++,
    title: "СИМ карт",
    info: "Dual",
  },
  {
    id: infoID++,
    title: "Сим картын төрөл",
    info: "Нано",
  },
  {
    id: infoID++,
    title: "Багтаамж",
    info: "256GB",
  },
  {
    id: infoID++,
    title: "CPU",
    info: "Octa-core (1x3.1 GHz Cortex-A78 & 3x3.0 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
  },
  {
    id: infoID++,
    title: "GPU",
    info: "Mali-G610 MC6",
  },
  {
    id: infoID++,
    title: "Чипсет",
    info: "Mediatek Dimensity 8200 Ultimate (4 nm)",
  },
  {
    id: infoID++,
    title: "Дэлгэцийн нягтаршил",
    info: "1080 x 2436 pixels (~388 ppi density)",
  },
  {
    id: infoID++,
    title: "Дэлгэцийн төрөл",
    info: "AMOLED, 1B colors, 144Hz, 1300 nits (peak)",
  },
  {
    id: infoID++,
    title: "Төрөл",
    info: "Ухаалаг гар утас",
  },
  {
    id: infoID++,
    title: "Дэлгэцийн даатгал",
    info: "80%",
  },
];
