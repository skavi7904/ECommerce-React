import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home"
import Shop from "./shop/Shop"
import About from "./about/About"
import Contact from "./contact/Contact"
import Account from "./account/Account"
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