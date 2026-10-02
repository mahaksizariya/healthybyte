import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";
import galleryDetail from "./assets/2.png";
import healthyBiteLogo from "./assets/HealthyByte Leaf Logo.png";
import ownerPhoto from "./assets/kamini.jpg";

const photos = {
  hero: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=2200&q=90",
  bakery: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=85",
  cakes: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1100&q=85",
  cupcakes: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1100&q=85",
  detail: galleryDetail,
};

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
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="healthyBite home" onClick={closeMenu}>
        <img className="brand-logo" src={healthyBiteLogo} alt="healthyBite" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav className={`main-nav${isOpen ? " is-open" : ""}`} id="main-navigation" aria-label="Main navigation">
        <a href="#story" onClick={closeMenu}>About</a>
        <a href="#cakes" onClick={closeMenu}>Cakes</a>
        <a href="#cupcakes" onClick={closeMenu}>Cupcakes</a>
        <a href={contactDetails.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" onClick={closeMenu}>
          <Youtube size={15} />
        </a>
        <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" onClick={closeMenu}>
          <Phone size={15} />
        </a>
        <a className="nav-reserve" href="#visit" onClick={closeMenu}>Order now <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" style={{ "--hero-image": `url("${photos.hero}")` }}>
      <div className="hero-shade" />
      <div className="hero-copy">
        <span className="hero-kicker"><span /> OWNER: KAMINI GUPTA</span>
        <h1>Freshly baked <em>joy</em><br />for every<br />celebration.</h1>
        <p>Custom cakes, soft cupcakes and sweet little moments made with care.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#cakes">Explore cakes <ArrowDown size={16} /></a>
          <a className="button button-clear" href="#cupcakes">See cupcakes</a>
        </div>
      </div>
      <div className="hero-note"><span>FRESHLY BAKED</span><span>LOVE IN<br />EVERY BITE</span></div>
      <a className="hero-scroll" href="#story" aria-label="Scroll to our story"><span>SCROLL FOR SWEETNESS</span><ArrowDown size={15} /></a>
      <div className="hero-location"><MapPin size={14} /> DELIVERED WITH CARE</div>
    </section>
  );
}

function Intro() {
  return (
    <section className="story section-wrap" id="story">
      <div className="story-photo-wrap">
        <img className="story-photo" src={photos.bakery} alt="Warm bakery counter with freshly baked treats" loading="lazy" />
        <span className="photo-caption">HANDCRAFTED DAILY</span>
        <span className="story-stamp">BAKE<br />WITH LOVE <Sparkles size={15} /></span>
      </div>
      <div className="story-copy">
        <span className="eyebrow">A LITTLE SWEETNESS, EVERY DAY</span>
        <h2>Made with care,<br />served with <em>smiles.</em></h2>
        <p>healthyBite brings together fresh ingredients, thoughtful finishing and joyful flavours for birthdays, gifting and everyday indulgence.</p>
        <p>From celebration cakes to bite-sized cupcakes, every order is made to feel personal, delicious and unforgettable.</p>
        <a className="text-link" href="#visit">Order your favourite <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow eyebrow-light">SWEET • FRESH • CUSTOM</span>
            <h2>Our best<br />for <em>your moments.</em></h2>
          </div>
          <p>Every cake and cupcake is baked fresh so your special days feel extra special.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.title} id={item.title === "Signature Cakes" ? "cakes" : "cupcakes"}>
              <a className="experience-image" href={item.url} aria-label={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="image-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <span className="card-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <a className="text-link menu-link" href="#visit">Start your order <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery section-wrap" id="gallery">
      <div className="gallery-heading">
        <div>
          <span className="eyebrow">FRESHLY BAKED DAILY</span>
          <h2>Sweet details<br /><em>worth sharing.</em></h2>
        </div>
        <a className="social-link" href={contactDetails.youtube} target="_blank" rel="noreferrer">
          <Instagram size={16} /> FOLLOW ON YOUTUBE <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="gallery-grid">
        <img className="gallery-large" src={photos.detail} alt="Pink and white sneaker displayed on a dark background" loading="lazy" />
        <img src={photos.cakes} alt="Fresh celebration cake details" loading="lazy" />
        <div className="gallery-note"><Sparkles size={20} /><span>FRESH.<br />FLAVOURFUL.<br /><em>HAPPY.</em></span></div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit-inner section-wrap">
        <div className="visit-copy">
          <span className="eyebrow eyebrow-light">ORDER YOUR FAVOURITE</span>
          <h2>Let’s make<br /><em>your next sweet moment.</em></h2>
          <p>Perfect for birthdays, gifting, parties and everyday treats. Custom orders are welcome.</p>
          <a className="button button-light" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">Message for custom order <Phone size={15} /></a>
        </div>
        <div className="visit-details">
          <div className="detail-item">
            <MapPin size={18} />
            <div><span>LOCATION</span><p>{contactDetails.address}</p></div>
            <ArrowUpRight size={15} />
          </div>
          <div className="detail-item">
            <Phone size={18} />
            <div><span>CALL / WHATSAPP</span><a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>{contactDetails.phone}</a></div>
            <ArrowUpRight size={15} />
          </div>
          <div className="detail-item">
            <Clock3 size={18} />
            <div><span>YOUTUBE</span><a href={contactDetails.youtube} target="_blank" rel="noreferrer">@Cooking_With_Kamini</a></div>
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <div className="footer-branding">
          <a className="wordmark footer-wordmark" href="#home" aria-label="healthyBite home">
            <img className="brand-logo" src={healthyBiteLogo} alt="healthyBite" />
          </a>
          <div className="footer-owner">
            <img src={ownerPhoto} alt="Kamini Gupta" />
            <span>OWNER<br /><strong>KAMINI GUPTA</strong></span>
          </div>
        </div>
        <p>Freshly baked for<br /><em>happy little moments.</em></p>
        <div className="footer-socials">
          <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a className="footer-social" href={contactDetails.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 healthyBite</span>
        <a href="#home">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <MenuSection />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

export default Home;
