import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, ArrowUpRight, Globe2, Ship, Leaf, Boxes, Menu, X, Phone, Mail, MapPin, ChevronDown, CheckCircle2, Package, Plane, Truck, BarChart3 } from "lucide-react";
import "./styles.css";

const services = [
    { icon: Globe2, title: "Import & Export", text: "Verified manufacturers, exporters and global buyers connected with compliance-first execution." },
    { icon: Truck, title: "Logistics & 3PL", text: "End-to-end road, sea and air freight — from first-mile pickup to final delivery." },
    { icon: BarChart3, title: "Digital Solutions", text: "Digital infrastructure for trade businesses, from B2B portals to API integrations." },
    { icon: Package, title: "Event Management", text: "Buyer meets and trade exhibitions designed for meaningful commercial connections." },
    { icon: CheckCircle2, title: "Verified Trade Network", text: "Structured onboarding for the manufacturers, buyers and partners in our ecosystem." }];
const products = [
    { title: "Agricultural Products", label: "Fresh • Sourced • Export Ready", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=88" },
    { title: "Spices & Grains", label: "Indian Food Commodities", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1100&q=88" },
    { title: "Industrial Goods", label: "Global General Trade", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=88" }];
const faqs = [
    ["What services does IMEX provide?", "IMEX provides import and export support, logistics and 3PL coordination, agriculture export and digital solutions for global trade."],
    ["Can IMEX source products from India?", "Yes. Share your product, quality, quantity and destination requirements and our team can discuss sourcing possibilities."],
    ["Can you coordinate international logistics?", "Yes. We can help coordinate freight and supply-chain requirements around your shipment, route and service needs."],
    ["How can I request a quotation?", "Use the enquiry form and tell us your product, quantity, destination and timeline. Our team can follow up with the next steps."]];

function App() {
    const [menu, setMenu] = useState(false), [faq, setFaq] = useState(0), [serviceMenu, setServiceMenu] = useState(false);
    useEffect(() => {
        const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        }), { threshold: .14 });
        document.querySelectorAll(".scroll-reveal").forEach(section => revealObserver.observe(section));
        return () => revealObserver.disconnect();
    }, []);
    const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); setServiceMenu(false) };
    return <div className="app">
        <div className="topbar"><div className="container topbarInner">
            <div className="topLeft location-item">
                <a href="tel:+919823709394"><Phone />+91 98237 09394</a><i />
                <a href="mailto:theimexdata@gmail.com"><Mail />theimexdata@gmail.com</a><i />
                <span className="location-item"><MapPin />Pune, India</span>
            </div>
            <div className="topRight"><span>Track Shipment</span><i /><span>Client Login</span></div></div></div>
        <header className="header"><div className="container nav">
            <button className="logoButton" onClick={() => go("home")}><img src="/images/imex-logo.png" alt="IMEX" className="logo" /></button>
            <div className={"navLinks " + (menu ? "open" : "")}>
                {[["Home", "home"], ["About Us", "about"]].map(([t, id]) => <button key={id} className={id === "home" ? "active" : ""} onClick={() => go(id)}>{t}</button>)}
                <div className="serviceNavItem"><button className="serviceNavButton" onClick={() => setServiceMenu(!serviceMenu)} aria-expanded={serviceMenu}>Services <ChevronDown /></button><div className={"serviceDropdown " + (serviceMenu ? "open" : "")}>{services.map(service => <button key={service.title} onClick={() => go("services")}>{service.title}</button>)}</div></div>
                {[["Products", "products"], ["Industries", "industries"], ["Contact Us", "contact"]].map(([t, id]) => <button key={id} onClick={() => go(id)}>{t}</button>)}
                <button className="mobileQuote" onClick={() => go("contact")}>Get A Quote <ArrowRight /></button></div>
            <button className="proBtn" onClick={() => go("contact")}>IMEX <span>PRO</span> <ArrowUpRight /></button>
            <button className="quoteBtn" onClick={() => go("contact")}>Get A Quote <ArrowRight /></button>
            <button className="menuBtn" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div></header>

        <section id="home" className="hero"><video className="heroVideo" autoPlay muted loop playsInline aria-hidden="true"><source src="/WhatsApp%20Video%202026-09-14%20at%2019.35.20.mp4" type="video/mp4" /></video><div className="heroVideoVeil" /><div className="heroGlow" /><div className="container heroGrid">
            <div className="heroContent"><div className="eyebrow"><span /> IMPORT <b>•</b> EXPORT <b>•</b> LOGISTICS <b>•</b> SOLUTIONS</div>
                <h1 className="TextHeading">Connecting INDIA, <br/>To <br/><em>Global Markets...!</em></h1>
                <p className="heroText"><b>Global trade infrastructure for Indian enterprises — bringing verified partners, precision logistics and compliance-first operations together.</b></p>
                <div className="heroButtons"><button className="greenBtn" onClick={() => go("contact")}>Connect With Us <ArrowRight /></button><button className="darkBtn" onClick={() => go("services")}><span>▶</span> Explore Services</button></div>
                <div className="stats">{[[Globe2, "45+", "Countries Reached"], [Package, "200+", "Verified Partners"], [Boxes, "5+", "Years Experience"], [CheckCircle2, "100%", "Compliance-First"]].map(([I, n, t]) => <div key={t}><I /><strong>{n}</strong><small>{t}</small></div>)}</div></div>
            <div className="heroVisual"><video autoPlay muted loop playsInline aria-label="International cargo logistics"><source src="/WhatsApp%20Video%202026-09-14%20at%2019.35.20.mp4" type="video/mp4" /></video><div className="visualOverlay" /><div className="route route1">INDIA <b>→</b> WORLD</div><div className="route route2"><Ship /> GLOBAL TRADE</div></div>
        </div>
            <div className="container serviceStrip">{services.slice(0, 4).map(s => { const I = s.icon; return <button className="stripCard" key={s.title} onClick={() => go("services")}><I /><div><h3>{s.title}</h3><p>{s.text}</p><span>Learn More <ArrowRight /></span></div></button> })}</div>
            <div className="partnerTicker" aria-label="IMEX partner network"><div>{["TradeLink Global", "Bharat Agri Exports", "AgroConnect India", "ShipFast Logistics", "Gulf Trade Partners", "Indo-Gulf Commerce", "EuroTrade Hub", "Pacific Freight Co."].concat(["TradeLink Global", "Bharat Agri Exports", "AgroConnect India", "ShipFast Logistics", "Gulf Trade Partners", "Indo-Gulf Commerce", "EuroTrade Hub", "Pacific Freight Co."]).map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div></div></section>

        <section id="about" className="section about scroll-reveal"><div className="container aboutGrid">
            <div className="aboutImage"><img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=88" alt="Cargo containers at port" /><div className="imageBadge"><Globe2 /><strong>INDIA → WORLD</strong><small>Built for global growth</small></div></div>
            <div className="aboutContent"><div className="sectionTag">WHO WE ARE</div><h2>We Connect India<br />With <span>The World</span></h2><p className="lead">IMEX is a global trade and logistics company committed to delivering innovative solutions with integrity and excellence.</p><p>We empower businesses to grow beyond boundaries by bringing sourcing, trade, logistics and digital capabilities together in one dependable partner.</p>
                <div className="checks">{["Global Network", "Customer Focused", "Reliable Operations", "Transparent Trade"].map(x => <div key={x}><CheckCircle2 />{x}</div>)}</div><button className="outlineGreen" onClick={() => go("contact")}>Know More About Us <ArrowUpRight /></button></div>
        </div></section>

        <section id="services" className="section services scroll-reveal"><div className="container"><div className="headingRow"><div><div className="sectionTag">OUR SERVICES</div><h2>Complete trade enablement,<br /><span>end-to-end.</span></h2></div><p>From agriculture exports to precision logistics, digital trade portals and live trade events, IMEX delivers across global commerce.</p></div>
            <div className="serviceGrid">{services.map((s, i) => { const I = s.icon; return <article className="serviceCard" key={s.title}><small>0{i + 1}</small><div className="cardIcon"><I /></div><h3>{s.title}</h3><p>{s.text}</p><button onClick={() => go("contact")}>Explore <ArrowUpRight /></button></article> })}</div></div></section>

        <section id="products" className="section products scroll-reveal"><div className="container"><div className="headingRow"><div><div className="sectionTag">TRADE CATEGORIES</div><h2>Products with<br /><span>global potential.</span></h2></div><p>Explore categories we can help source, move and connect with international buyers.</p></div>
            <div className="productGrid">{products.map(p => <article className="productCard" key={p.title}><img src={p.image} alt={p.title} /><div className="productShade" /><div className="productInfo"><small>{p.label}</small><h3>{p.title}</h3><ArrowUpRight /></div></article>)}</div></div></section>

        <section id="industries" className="section industries scroll-reveal"><div className="container industryBox"><div><div className="sectionTag">GLOBAL REACH</div><h2>Join the universal<br /><span>trade network.</span></h2><p>Connect with verified exporters, growers and service providers across India and global trade corridors.</p><button className="greenBtn" onClick={() => go("contact")}>Connect With Us <ArrowRight /></button></div>
            <div className="industryVisual"><div className="globeCircle"><Globe2 /><b>GLOBAL</b><small>TRADE NETWORK</small></div><div className="miniRoute r1"><Plane /> Air Freight</div><div className="miniRoute r2"><Ship /> Ocean Freight</div><div className="miniRoute r3"><Truck /> Road Logistics</div></div></div></section>

        <section className="section process scroll-reveal"><div className="container"><div className="sectionTag">HOW IT WORKS</div><h2>Simple process.<br /><span>Serious results.</span></h2><div className="processGrid">{[["01", "Tell us your requirement", "Share product, quantity, destination and timeline."], ["02", "We build the route", "Coordinate verified partners, documents, freight and compliance."], ["03", "Move with confidence", "Keep every commercial and shipment detail moving forward."]].map(x => <div key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>

        <section className="section faq scroll-reveal"><div className="container faqGrid"><div><div className="sectionTag">FAQ</div><h2>Questions?<br /><span>We've got answers.</span></h2><p>Have a trade requirement in mind? Start with a conversation.</p></div><div className="faqList">{faqs.map(([q, a], i) => <div className={"faqItem " + (faq === i ? "active" : "")} key={q}><button onClick={() => setFaq(faq === i ? -1 : i)}><span>{q}</span><ChevronDown /></button>{faq === i && <p>{a}</p>}</div>)}</div></div></section>

        <section id="contact" className="section contact scroll-reveal"><div className="container contactGrid"><div className="contactCopy"><div className="sectionTag">READY TO BEGIN?</div><h2>Let's build something<br /><span>extraordinary.</span></h2><p>Whether you are expanding globally, optimising logistics or launching a digital presence, we bring precision, speed and integrity to every engagement.</p><div className="contactLinks"><a href="tel:+918668818668"><Phone />+91 8668 81 8668</a><a href="mailto:connect@theimex.com"><Mail />connect@theimex.com</a><span><MapPin />Pune, India</span></div></div>
            <form className="contactForm" onSubmit={e => { e.preventDefault(); alert("Enquiry submitted. Connect this form to your backend/API for production.") }}><div className="formTwo"><label>Name<input required placeholder="Your name" /></label><label>Company<input placeholder="Company" /></label></div><label>Email<input required type="email" placeholder="you@company.com" /></label><label>Service<select defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Message<textarea rows="4" placeholder="Tell us about your requirement..." /></label><button className="greenBtn">Send Enquiry <ArrowRight /></button></form></div></section>

        <footer><div className="container footerGrid"><div><button className="footerLogoBtn" onClick={() => go("home")}><img src="/images/imex-logo.png" alt="IMEX" /></button><p>Connecting Indian businesses, products and opportunities with global markets.</p></div><div><h4>Company</h4><button onClick={() => go("about")}>About Us</button><button onClick={() => go("services")}>Services</button><button onClick={() => go("products")}>Products</button></div><div><h4>Contact</h4><a href="tel:+919823709394">+91 98237 09394</a><a href="mailto:hello@theimex.com">hello@theimex.com</a><span>Pune, India</span></div></div><div className="container copyright"><span>© 2026 IMEX. All rights reserved.</span><span>Connecting India to Global Markets.</span></div></footer>
    </div>
}
createRoot(document.getElementById("root")).render(<App />);
