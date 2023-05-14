import { BrowserRouter, Routes, Route, Link } from  "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Vans from "./components/Vans";
import "./App.css";
import "../server"

export default function Router() {
    return (
        <BrowserRouter>
        <header>
            <Link className="site-logo" to={"/"}>VANLIFE</Link>
            <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/vans"}>Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />}/>
        </Routes>
        </BrowserRouter>
    )
}
