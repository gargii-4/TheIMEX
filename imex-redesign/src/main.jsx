import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import imexLogo from './assets/imex-logo.png';

const services = [
  ['01', 'Global Sourcing', 'Find verified producers and the right product fit across markets.', '↗'],
  ['02', 'Export Operations', 'Make every shipment move with clarity, speed and full compliance.', '↗'],
  ['03', 'Freight & Logistics', 'From port to door, we coordinate the route that works for you.', '↗'],
  ['04', 'Trade Advisory', 'Turn changing regulations into confident commercial decisions.', '↗'],
];

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  return <>
    <div className="topbar">
      <div className="container topbar-inner"><span>India to the world — with care, clarity & confidence.</span><span className="top-contact">Pune, India &nbsp; • &nbsp; +91 98237 09394</span></div>
    </div>
    <header className="container nav">
      <a href="#home" className="brand logo-brand" aria-label="IMEX home"><img src={imexLogo} alt="IMEX — Trade made simple" /></a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? '×' : '☰'}</button>
      <nav className={open ? 'show' : ''}>
        <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#markets">Markets</a>
        <a className="nav-cta" href="#contact">Start a conversation <b>↗</b></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-wash" />
        <div className="container hero-content">
          <p className="eyebrow light"><span /> Global trade, thoughtfully done</p>
          <h1>Your next market<br /><em>is within reach.</em></h1>
          <p className="hero-copy">We help ambitious businesses source, ship and grow across borders — without the usual trade complexity.</p>
          <div className="hero-actions"><a href="#contact" className="button primary">Plan your shipment <b>→</b></a><a href="#services" className="text-link">Explore what we do <b>↓</b></a></div>
        </div>
        <div className="hero-stamp"><div>TRUSTED TRADE<br />PARTNER</div><strong>20<span>+</span></strong><small>markets connected</small></div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="trade-film">
        <div className="film-video-wrap">
          <video className="film-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85">
            <source src="https://cdn.coverr.co/videos/coverr-the-ship-sails-at-sunset-1573/1080p.mp4" type="video/mp4" />
          </video>
          <div className="film-shade" />
        </div>
        <div className="container film-content"><p className="eyebrow light"><span /> Trade in motion</p><h2>Distance is only<br /><em>the beginning.</em></h2><p>Watch how a considered supply chain turns a local product into a global opportunity.</p><button className="play-button" onClick={(event) => { const video = event.currentTarget.closest('.trade-film').querySelector('video'); video.paused ? video.play() : video.pause(); event.currentTarget.classList.toggle('is-paused', !video.paused); }} aria-label="Play or pause trade film"><span>▶</span> PLAY THE FILM</button></div>
        <div className="film-caption">FROM INDIA <b>✦</b> TO THE WORLD</div>
      </section>

      <section className="intro container" id="about">
        <p className="eyebrow"><span /> A smarter way to move</p>
        <div className="intro-grid"><h2>Trade is personal.<br /><em>We keep it that way.</em></h2><div><p>IMEX is an import-export partner built for businesses that value a clear answer, a careful hand, and a relationship that lasts beyond one shipment.</p><a href="#services" className="text-link dark">Meet the IMEX way <b>→</b></a></div></div>
        <div className="stats"><div><strong>06+</strong><span>Years moving goods globally</span></div><div><strong>12K</strong><span>Tonnes handled with care</span></div><div><strong>20+</strong><span>Markets in our network</span></div><div><strong>98%</strong><span>On-time dispatch record</span></div></div>
      </section>

      <section className="services" id="services"><div className="container">
        <div className="section-head"><div><p className="eyebrow"><span /> What we do</p><h2>Every moving part.<br /><em>One capable partner.</em></h2></div><p>Whether you're buying from India or taking an Indian product abroad, our team keeps the trade lane open.</p></div>
        <div className="service-list">{services.map((item, i) => <button key={item[0]} onClick={() => setSelected(i)} className={selected === i ? 'service active' : 'service'}><span className="service-num">{item[0]}</span><span className="service-title">{item[1]}</span><span className="service-desc">{item[2]}</span><span className="round-arrow">{item[3]}</span></button>)}</div>
      </div></section>

      <section className="journey" id="markets"><div className="journey-photo"><video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1300&q=85"><source src="https://cdn.coverr.co/videos/coverr-a-container-ship-in-the-open-sea-1574/1080p.mp4" type="video/mp4" /></video></div><div className="journey-panel"><p className="eyebrow light"><span /> India, connected</p><h2>From a good origin<br />to a <em>great arrival.</em></h2><p>Our world is built around the details: right source, right documentation, right route, right time.</p><a href="#contact" className="button sand">Explore our markets <b>→</b></a><div className="route"><div className="origin"><b>●</b> INDIA<br /><span>Origin</span></div><div className="route-line">✦ <span>━━━━━━</span> ✦</div><div className="destination"><b>◉</b> WORLDWIDE<br /><span>Destination</span></div></div></div></section>

      <section className="products container"><div className="products-copy"><p className="eyebrow"><span /> Featured sectors</p><h2>Goods with a story<br /><em>worth taking further.</em></h2><p>We have a particular feel for products that start close to the earth, and travel beautifully.</p><a href="#contact" className="text-link dark">View all capabilities <b>→</b></a></div><div className="product-cards"><article className="product-card spices"><div><span>01 / AGRO COMMODITIES</span><h3>Rooted in<br />quality.</h3></div><a href="#contact">Explore <b>↗</b></a></article><article className="product-card craft"><div><span>02 / ARTISANAL GOODS</span><h3>Made to<br />travel.</h3></div><a href="#contact">Explore <b>↗</b></a></article></div></section>

      <section className="contact" id="contact"><div className="contact-image" /><div className="container contact-inner"><div><p className="eyebrow light"><span /> Let’s move forward</p><h2>Have a destination<br />in <em>mind?</em></h2></div><div className="contact-right"><p>Tell us where you're looking to go. We’ll help you get there, with the right people and a plan you can trust.</p><a href="mailto:hello@theimex.com" className="button primary">Talk to our trade team <b>→</b></a><small>or call us at <a href="tel:+919823709394">+91 98237 09394</a></small></div></div></section>
    </main>
    <footer><div className="container footer-top"><a href="#home" className="brand footer-brand logo-brand"><img src={imexLogo} alt="IMEX" /></a><p>Global reach. Human precision.<br />A better way to trade.</p><div><a href="#services">Services</a><a href="#about">About IMEX</a><a href="#contact">Contact</a></div><div><a href="mailto:hello@theimex.com">hello@theimex.com</a><a href="tel:+919823709394">+91 98237 09394</a></div></div><div className="container footer-bottom"><span>© 2026 IMEX. All rights reserved.</span><span>Designed for global growth.</span></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
