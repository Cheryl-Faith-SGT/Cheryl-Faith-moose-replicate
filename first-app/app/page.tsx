import Nav from "./components/nav"
import Landing from "./components/Landing"
import Loading from "./components/Loading"
import About from "./components/about"
import Key from "./components/Key"
import "./globals.css";

export default function App() {
    return (
        <div className="bg-white">
            <Nav/>
            <Landing/>
            <About/>
            <Key/>
        </div>
    );
}