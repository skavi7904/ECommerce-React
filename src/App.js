import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Account from "./pages/Account";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);