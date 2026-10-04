import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  ShieldCheck,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";
import galleryDetail from "./assets/cake 6.png";
import cakeOne from "./assets/CAKE 1.png";
import cakeFour from "./assets/CAKE 4.png";
import cakeThree from "./assets/CAKE 3.png";
import cakeTwo from "./assets/CAKE 2.png";
import cakeFive from "./assets/cake 5.png";
import cakeSeven from "./assets/cake 7.png";
import cakeEight from "./assets/cake 8.png";
import cakeNine from "./assets/cake 9.png";
import cakeTen from "./assets/cake 10.png";
import cakeEleven from "./assets/cake 11.png";
import babydoll from "./assets/babydoll3.png";
import cakeTwelve from "./assets/cake 12.png";
import cookieOne from "./assets/cookie1.png";
import cupcakeImage from "./assets/cupcake.png";
import healthyBiteLogo from "./assets/healthy_bites_logo.png";
import footerLogo from "./assets/fulllogo.jpeg";
import ownerPhoto from "./assets/kamini.jpg";

const photos = {
  hero: cakeFour,
  bakery: babydoll,
  cakes: cookieOne,
  cupcakes: cupcakeImage,
};

const galleryPhotos = [
  { image: cakeOne, name: "Almond", alt: "Almond cake" },
  { image: cakeTwo, name: "Ananya", alt: "Green Ananya birthday cake" },
  { image: cakeThree, name: "Blue Floral", alt: "Blue floral tier cake" },
  { image: cakeFour, name: "Floral", alt: "Floral birthday cake" },
  { image: cakeFive, name: "Cartoon", alt: "Cartoon-themed birthday cake" },
  { image: galleryDetail, name: "Hello Kitty", alt: "Hello Kitty birthday cake" },
  { image: cakeSeven, name: "Chocolate", alt: "Chocolate cake" },
  { image: cakeEight, name: "Choco Drip", alt: "Chocolate drip cake" },
  { image: cakeNine, name: "Car Cake", alt: "Car-themed birthday cake" },
  { image: cakeTen, name: "Black Forest", alt: "Black Forest cake" },
  { image: cakeEleven, name: "Blue Birthday", alt: "Blue birthday cake" },
  { image: cakeTwelve, name: "Peppa Pig", alt: "Peppa Pig-themed cake" },
];

const contactDetails = {
  phone: "+91 79998 61085",
  whatsapp: "https://wa.me/917999861085",
  youtube: "https://www.youtube.com/@Cooking_With_Kamini",
  address: "Whitefield Kadugodi, Bengaluru, Karnataka",
};

const experiences = [
  {
    title: "Signature Cakes",
    text: "Beautiful custom cakes crafted for birthdays, anniversaries, gifting and every sweet celebration.",
    image: photos.cakes,
    alt: "A delicious celebration cake with finishing details",
    label: "MOST LOVED",
    url: "#cakes",
  },
  {
    title: "Cupcake Delights",
    text: "Soft, fluffy and colourful cupcakes made for parties, treats and little moments of joy.",
    image: photos.cupcakes,
    alt: "Fresh cupcakes arranged in a bakery display",
    label: "FAVOURITE PICKS",
    url: "#cupcakes",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute left-0 top-0 z-10 flex h-[88px] w-full items-center justify-between border-b border-white/20 px-[max(48px,calc((100vw-1260px)/2))] text-[#fffaf3] max-[900px]:h-[76px] max-[900px]:px-7 max-[640px]:h-[70px] max-[640px]:px-5">
      <a className="inline-flex items-center gap-[11px]" href="#home" aria-label="healthyBite home" onClick={closeMenu}>
        <img className="h-[54px] w-28 object-contain max-[640px]:h-12 max-[640px]:w-24" src={healthyBiteLogo} alt="healthyBite" />
      </a>

      <button
        className="hidden h-10 w-10 place-items-center rounded-full border border-white/60 bg-transparent text-inherit max-[640px]:grid"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav className={`flex items-center gap-[35px] max-[900px]:gap-5 max-[640px]:absolute max-[640px]:left-0 max-[640px]:right-0 max-[640px]:top-[69px] max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-0 max-[640px]:bg-[#302a25] max-[640px]:px-5 max-[640px]:pb-5 max-[640px]:pt-2 ${isOpen ? "max-[640px]:flex" : "max-[640px]:hidden"}`} id="main-navigation" aria-label="Main navigation">
        <a className="text-xs text-white/[0.88] transition-colors hover:text-[#e7b99b] max-[640px]:border-b max-[640px]:border-white/[0.13] max-[640px]:px-1 max-[640px]:py-[15px]" href="#story" onClick={closeMenu}>About</a>
        <a className="text-xs text-white/[0.88] transition-colors hover:text-[#e7b99b] max-[640px]:border-b max-[640px]:border-white/[0.13] max-[640px]:px-1 max-[640px]:py-[15px]" href="#cakes" onClick={closeMenu}>Cakes</a>
        <a className="text-xs text-white/[0.88] transition-colors hover:text-[#e7b99b] max-[640px]:border-b max-[640px]:border-white/[0.13] max-[640px]:px-1 max-[640px]:py-[15px]" href="#cupcakes" onClick={closeMenu}>Cupcakes</a>
        <a className="text-xs text-white/[0.88] transition-colors hover:text-[#e7b99b] max-[640px]:border-b max-[640px]:border-white/[0.13] max-[640px]:px-1 max-[640px]:py-[15px]" href={contactDetails.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" onClick={closeMenu}>
          <Youtube size={15} />
        </a>
        <a className="text-xs text-white/[0.88] transition-colors hover:text-[#e7b99b] max-[640px]:border-b max-[640px]:border-white/[0.13] max-[640px]:px-1 max-[640px]:py-[15px]" href={contactDetails.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" onClick={closeMenu}>
          <Phone size={15} />
        </a>
        <a className="inline-flex min-h-[41px] items-center justify-center gap-[14px] border border-white/70 px-[17px] text-[11px] transition-colors hover:bg-[#fffaf3] hover:text-[#28231f] max-[640px]:mt-[15px] max-[640px]:justify-between" href="#visit" onClick={closeMenu}>Order now <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[min(810px,100svh)] items-center overflow-hidden bg-[#34291f] px-[max(48px,calc((100vw-1120px)/2))] pb-28 pt-[150px] text-[#fffaf3] min-[1500px]:min-h-[850px] max-[900px]:min-h-[760px] max-[900px]:px-[7vw] max-[640px]:min-h-[100svh] max-[640px]:px-[25px] max-[640px]:pb-[120px] max-[640px]:pt-[135px]">
      <img className="absolute inset-0 h-full w-full object-cover object-[center_54%] max-[640px]:object-[57%_center]" src={photos.hero} alt="" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,24,21,0.78)_0%,rgba(28,24,21,0.54)_42%,rgba(28,24,21,0.08)_100%),linear-gradient(0deg,rgba(24,20,17,0.30),transparent_32%)] max-[640px]:bg-[linear-gradient(90deg,rgba(28,24,21,0.77),rgba(28,24,21,0.37)),linear-gradient(0deg,rgba(24,20,17,0.34),transparent_32%)]" />
      <div className="relative z-[1] max-w-[620px]">
        <span className="inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1.7px] text-white/[0.85] max-[640px]:max-w-[290px] max-[640px]:text-[8px] max-[640px]:leading-[1.7]"><span className="h-[7px] w-[7px] rounded-full bg-[#d99c69]" /> HOMEMADE BAKES • QUALITY INGREDIENTS</span>
        <h1 className="mt-[25px] text-[clamp(60px,7vw,96px)] font-medium leading-[0.93] tracking-[-4.5px] text-[#fffaf3] max-[640px]:mt-[22px] max-[640px]:text-[clamp(54px,15vw,84px)] max-[640px]:tracking-[-3.8px]">Homemade Happiness,<br /><em className="not-italic font-bold text-[#e6b18b]">Baked Fresh.</em></h1>
        <p className="mb-7 mt-[22px] max-w-[560px] text-[15px] leading-[1.8] text-white/[0.83] max-[640px]:max-w-[280px] max-[640px]:text-[13px]">Freshly baked cakes, cupcakes & sweet treats made with love, using quality ingredients and better oils for a delicious homemade taste.</p>
        <div className="flex flex-wrap gap-4">
          <a className="inline-flex min-h-[50px] items-center justify-center gap-5 bg-[#f6f3ed] px-[19px] text-[11px] font-semibold text-[#28231f] transition hover:-translate-y-0.5 hover:bg-[#e7b99b]" href="#cakes">Explore Our Cakes <ArrowRight size={16} /></a>
          <a className="inline-flex min-h-[50px] items-center justify-center gap-5 border border-white/70 bg-white/[0.08] px-[19px] text-[11px] font-semibold text-[#fffaf3] transition hover:-translate-y-0.5 hover:bg-white/[0.16]" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">Order on WhatsApp</a>
        </div>
      </div>
      <div className="absolute bottom-[137px] right-[max(48px,calc((100vw-1120px)/2))] grid h-[142px] w-[142px] rotate-[9deg] content-center justify-items-center gap-[10px] rounded-full border border-white/[0.65] text-center max-[900px]:right-[7vw] max-[640px]:bottom-[104px] max-[640px]:right-[23px] max-[640px]:h-[95px] max-[640px]:w-[95px] max-[640px]:gap-1.5"><span className="text-[8px] font-bold tracking-[1.4px] text-[#e8b58f] max-[640px]:text-[6px]">FRESHLY BAKED</span><span className="text-[15px] leading-[1.4] max-[640px]:text-[11px]">LOVE IN<br />EVERY BITE</span></div>
      <a className="absolute bottom-[30px] left-[max(48px,calc((100vw-1120px)/2))] flex items-center gap-3 text-[8px] font-bold tracking-[1.4px] text-white/[0.75] max-[900px]:left-[7vw] max-[640px]:bottom-[23px] max-[640px]:left-5 max-[640px]:gap-[7px] max-[640px]:text-[7px] max-[640px]:tracking-[0.8px]" href="#story" aria-label="Scroll to our story"><span>SCROLL FOR SWEETNESS</span><ArrowDown size={15} /></a>
      <div className="absolute bottom-[30px] right-[max(48px,calc((100vw-1120px)/2))] flex items-center gap-3 text-[8px] font-bold tracking-[1.4px] text-white/[0.75] max-[900px]:right-[7vw] max-[640px]:bottom-[23px] max-[640px]:right-5 max-[640px]:gap-[7px] max-[640px]:text-[7px] max-[640px]:tracking-[0.8px]"><MapPin size={14} /> DELIVERED WITH CARE</div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto grid w-[min(1120px,calc(100%-96px))] grid-cols-[1fr_0.88fr] items-center gap-[105px] py-[130px] max-[900px]:w-[min(calc(100%-56px),700px)] max-[900px]:grid-cols-2 max-[900px]:gap-[58px] max-[900px]:py-[100px] max-[640px]:w-[calc(100%-40px)] max-[640px]:grid-cols-1 max-[640px]:gap-[42px] max-[640px]:py-[78px]" id="story">
      <div className="relative min-h-[480px] max-w-[calc(100%-50px)] max-[900px]:min-h-[430px] max-[640px]:h-[360px] max-[640px]:min-h-[360px]">
        <img className="h-[480px] w-full object-contain max-[900px]:h-[430px] max-[640px]:h-[360px] max-[640px]:min-h-[360px]" src={photos.bakery} alt="Warm bakery counter with freshly baked treats" loading="lazy" />
        <span className="absolute bottom-0 right-0 bg-[#f6f3ed] px-[14px] py-3 text-[8px] font-bold tracking-[1.3px] text-[#827970]">HANDCRAFTED DAILY</span>
        <span className="absolute right-[-18px] top-7 flex h-28 w-28 rotate-[8deg] flex-col items-center justify-center gap-2 rounded-full bg-[#a74e35] text-center text-sm leading-[1.15] text-[#fffaf3] max-[900px]:right-[-24px] max-[900px]:h-24 max-[900px]:w-24 max-[640px]:right-[-8px] max-[640px]:top-[18px] max-[640px]:h-[86px] max-[640px]:w-[86px] max-[640px]:text-xs">BAKE<br />WITH LOVE <Sparkles className="text-[#f1c59b]" size={15} /></span>
      </div>
      <div>
        <span className="inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1.7px] text-[#a74e35]">A LITTLE SWEETNESS, EVERY DAY</span>
        <h2 className="my-5 mb-[22px] text-[clamp(42px,5vw,62px)] font-medium leading-[1.02] tracking-[-2.8px] max-[640px]:text-[49px] max-[640px]:tracking-[-2.5px]">Made with care,<br />served with <em className="not-italic font-bold text-[#a74e35]">smiles.</em></h2>
        <p className="max-w-[415px] text-[13px] leading-[1.95] text-[#736a62] max-[640px]:text-xs">healthyBite brings together fresh ingredients, thoughtful finishing and joyful flavours for birthdays, gifting and everyday indulgence.</p>
        <p className="max-w-[415px] text-[13px] leading-[1.95] text-[#736a62] max-[640px]:text-xs">From celebration cakes to bite-sized cupcakes, every order is made to feel personal, delicious and unforgettable.</p>
        <a className="group mt-[17px] inline-flex items-center gap-3 text-[11px] font-bold text-[#a74e35]" href="#visit">Order your favourite <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} /></a>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="bg-[#302a25] py-[105px] text-[#fffaf3] max-[640px]:py-[76px]" id="menu">
      <div className="mx-auto w-[min(1120px,calc(100%-96px))] max-[900px]:w-[min(calc(100%-56px),700px)] max-[640px]:w-[calc(100%-40px)]">
        <div className="mb-11 flex items-end justify-between gap-10 max-[640px]:mb-[29px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[18px]">
          <div>
            <span className="inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1.7px] text-[#d7a981]">SWEET • FRESH • CUSTOM</span>
            <h2 className="mt-[18px] text-[clamp(43px,5.5vw,68px)] font-medium leading-[0.98] tracking-[-3.5px] max-[640px]:text-[49px] max-[640px]:tracking-[-2.5px]">Our best<br />for <em className="not-italic font-bold text-[#ddb18b]">your moments.</em></h2>
          </div>
          <p className="mb-1 max-w-[292px] text-[13px] leading-[1.85] text-white/[0.68] max-[640px]:m-0 max-[640px]:max-w-[310px] max-[640px]:text-xs">Every cake and cupcake is baked fresh so your special days feel extra special.</p>
        </div>
        <div className="grid grid-cols-2 gap-[25px] max-[640px]:grid-cols-1 max-[640px]:gap-[34px]">
          {experiences.map((item) => (
            <article key={item.title} id={item.title === "Signature Cakes" ? "cakes" : "cupcakes"}>
              <a className="group relative block h-[345px] overflow-hidden bg-[#4a4037] max-[640px]:h-[275px]" href={item.url} aria-label={item.title}>
                <img className={`h-full w-full object-cover transition-transform duration-500 ${item.title === "Signature Cakes" ? "scale-[1.2] object-[center_75%] group-hover:scale-[1.25]" : "group-hover:scale-[1.035]"} ${item.title === "Cupcake Delights" ? "object-[center_75%]" : ""}`} src={item.image} alt={item.alt} loading="lazy" />
                <span className="absolute bottom-[15px] right-[15px] grid h-10 w-10 place-items-center bg-[#f6f3ed] text-[#28231f]"><ArrowUpRight size={18} /></span>
              </a>
              <span className="mt-[21px] block text-[8px] font-bold tracking-[1.6px] text-[#d7a981]">{item.label}</span>
              <h3 className="my-[9px] mb-1.5 text-[25px] font-semibold max-[640px]:text-[23px]">{item.title}</h3>
              <p className="m-0 max-w-[390px] text-xs leading-[1.8] text-white/[0.68]">{item.text}</p>
            </article>
          ))}
        </div>
        <a className="mt-[39px] inline-flex items-center gap-3 text-[11px] font-bold text-[#e7b99b]" href="#visit">Start your order <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-96px))] py-[115px] pb-32 max-[900px]:w-[min(calc(100%-56px),700px)] max-[640px]:w-[calc(100%-40px)] max-[640px]:py-[78px] max-[640px]:pb-[84px]" id="gallery">
      <div className="mb-9 flex items-end justify-between max-[640px]:mb-6 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[18px]">
        <div>
          <span className="inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1.7px] text-[#a74e35]">FRESHLY BAKED DAILY</span>
          <h2 className="mb-0 mt-5 text-[clamp(42px,5vw,62px)] font-medium leading-[1.02] tracking-[-2.8px] max-[640px]:text-[49px] max-[640px]:tracking-[-2.5px]">Sweet details<br /><em className="not-italic font-bold text-[#a74e35]">worth sharing.</em></h2>
        </div>
        <a className="mb-[7px] inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1px] text-[#a74e35]" href={contactDetails.youtube} target="_blank" rel="noreferrer">
          <Instagram size={16} /> FOLLOW ON YOUTUBE <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="grid grid-cols-6 gap-4 max-[900px]:grid-cols-4 max-[640px]:grid-cols-3 max-[640px]:gap-3">
        {galleryPhotos.map((photo, index) => (
          <div className="group relative mx-auto aspect-square w-full max-w-40" key={photo.alt}>
            <img className={`absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-500 ${index === 0 ? "scale-[1.3] group-hover:scale-[1.35]" : index === 6 ? "scale-125 group-hover:scale-[1.3]" : "group-hover:scale-105"}`} src={photo.image} alt={photo.alt} loading="lazy" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id={`cake-label-arc-${index}`} d="M 22,100 A 78,78 0 0 1 178,100" />
              </defs>
              <circle cx="100" cy="100" r="91" fill="none" stroke="#d8a99a" strokeWidth="1.5" />
              <text fill="#a74e35" fontSize="9" fontWeight="700" letterSpacing="2">
                <textPath href={`#cake-label-arc-${index}`} startOffset="50%" textAnchor="middle">{photo.name}</textPath>
              </text>
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="bg-[#a74e35] py-[102px] text-[#fffaf3] max-[640px]:py-[76px]" id="visit">
      <div className="mx-auto grid w-[min(1120px,calc(100%-96px))] grid-cols-[1fr_0.82fr] items-center gap-[115px] max-[900px]:w-[min(calc(100%-56px),700px)] max-[900px]:gap-[55px] max-[640px]:w-[calc(100%-40px)] max-[640px]:grid-cols-1 max-[640px]:gap-[42px]">
        <div>
          <span className="inline-flex items-center gap-[10px] text-[9px] font-bold tracking-[1.7px] text-[#d7a981]">ORDER YOUR FAVOURITE</span>
          <h2 className="mb-4 mt-[19px] text-[clamp(50px,6vw,76px)] font-medium leading-[0.96] tracking-[-4px] max-[640px]:text-[61px] max-[640px]:tracking-[-3px]">Let’s make<br /><em className="not-italic font-bold text-[#f2c99f]">your next sweet moment.</em></h2>
          <p className="mb-[25px] max-w-[370px] text-[13px] leading-[1.85] text-white/[0.8] max-[640px]:text-xs">Perfect for birthdays, gifting, parties and everyday treats. Custom orders are welcome.</p>
          <a className="inline-flex min-h-[50px] items-center justify-center gap-5 bg-[#f6f3ed] px-[19px] text-[11px] font-semibold text-[#28231f] transition hover:-translate-y-0.5 hover:bg-[#f2c99f]" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">Message for custom order <Phone size={15} /></a>
        </div>
        <div className="border-t border-white/[0.35]">
          <div className="grid grid-cols-[25px_1fr_16px] items-start gap-[14px] border-b border-white/[0.35] py-[22px]">
            <MapPin className="mt-0.5 text-[#f2c99f]" size={18} />
            <div><span className="text-[8px] font-bold tracking-[1.4px] text-[#f2c99f]">LOCATION</span><p className="mb-0 mt-2 text-xs leading-[1.75] text-[#fffaf3]">{contactDetails.address}</p></div>
            <ArrowUpRight className="mt-0.5" size={15} />
          </div>
          <div className="grid grid-cols-[25px_1fr_16px] items-start gap-[14px] border-b border-white/[0.35] py-[22px]">
            <Phone className="mt-0.5 text-[#f2c99f]" size={18} />
            <div><span className="text-[8px] font-bold tracking-[1.4px] text-[#f2c99f]">CALL / WHATSAPP</span><a className="mt-2 inline-block text-xs leading-[1.75] text-[#fffaf3]" href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>{contactDetails.phone}</a></div>
            <ArrowUpRight className="mt-0.5" size={15} />
          </div>
          <div className="grid grid-cols-[25px_1fr_16px] items-start gap-[14px] border-b border-white/[0.35] py-[22px]">
            <Clock3 className="mt-0.5 text-[#f2c99f]" size={18} />
            <div><span className="text-[8px] font-bold tracking-[1.4px] text-[#f2c99f]">YOUTUBE</span><a className="mt-2 inline-block text-xs leading-[1.75] text-[#fffaf3]" href={contactDetails.youtube} target="_blank" rel="noreferrer">@Cooking_With_Kamini</a></div>
            <ArrowUpRight className="mt-0.5" size={15} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#25211e] pb-[19px] pt-[42px] text-[#fffaf3] max-[640px]:pt-[34px]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-96px))] items-center justify-between border-b border-white/[0.17] pb-[37px] max-[900px]:w-[min(calc(100%-56px),700px)] max-[640px]:w-[calc(100%-40px)] max-[640px]:items-start max-[640px]:gap-6 max-[640px]:pb-[27px]">
        <div className="flex flex-col items-start gap-[10px] max-[640px]:gap-2">
          <a className="inline-flex items-center gap-[11px] overflow-hidden rounded-full" href="#home" aria-label="healthyBite home">
            <img className="h-[54px] w-[54px] rounded-full object-cover max-[640px]:h-12 max-[640px]:w-12" src={footerLogo} alt="healthyBite" />
          </a>
          <div className="flex items-center gap-[9px]">
            <img className="h-[38px] w-[38px] rounded-full border border-white/[0.45] object-cover max-[640px]:h-[34px] max-[640px]:w-[34px]" src={ownerPhoto} alt="Kamini Gupta" />
            <span className="text-[8px] font-bold leading-[1.5] tracking-[1px] text-[#e1b28b]">OWNER<br /><strong className="text-[10px] tracking-[0.6px] text-[#fffaf3]">KAMINI GUPTA</strong></span>
          </div>
        </div>
        <p className="m-0 text-center text-[13px] leading-[1.7] text-white/[0.78] max-[640px]:hidden">Freshly baked for<br /><em className="not-italic font-bold text-[#e1b28b]">happy little moments.</em></p>
        <div className="flex items-center gap-3">
          <a className="grid h-[39px] w-[39px] place-items-center overflow-hidden rounded-full border border-white/40 transition-colors hover:bg-[#a74e35]" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a className="grid h-[39px] w-[39px] place-items-center overflow-hidden rounded-full border border-white/40 transition-colors hover:bg-[#a74e35]" href={contactDetails.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-[min(1120px,calc(100%-96px))] justify-between pt-[17px] text-[8px] font-semibold tracking-[1px] text-white/[0.55] max-[900px]:w-[min(calc(100%-56px),700px)] max-[640px]:w-[calc(100%-40px)] max-[640px]:gap-4 max-[640px]:text-[7px] max-[640px]:tracking-[0.6px]">
        <span>© 2026 healthyBite</span>
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="text-[#e1b28b]" size={13} /> FSSAI: 21226188004115</span>
        <a className="transition-colors hover:text-[#fffaf3]" href="#home">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#f6f3ed] font-sans text-[#28231f] antialiased">
      <Header />
      <main>
        <Hero />
        <Intro />
        <MenuSection />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
