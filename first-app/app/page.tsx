import Nav from "./components/nav"
import Landing from "./components/Landing"
import Loading from "./components/Loading"
import About from "./components/about"
import Key from "./components/Key"
import Features from "./components/Features"
import Benefits from "./components/Benefits"
import Faq from "./components/Faq"
import Cta from "./components/Cta"
import "./globals.css";
import Lenis from 'lenis';

export default function App() {

    return (
        <div className="bg-white">
            <Nav />
            <Landing />
            <About />
            <Key />
            <Features />
            <Benefits />
            <Faq />
            <Cta />
        </div>
    );
}