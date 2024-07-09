import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";

import { Outlet } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full static">
        <Navbar />
        <Outlet />
        <Footer />
        <WhatsAppIcon className=" fixed right-0 bottom-0 text-green-600 text-8xl m-4 w-96 h-96 " />
      </div>
      
    </>
  );
}

export default App;
