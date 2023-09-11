import { useState } from "react";
import logo1 from "./assets/logo1.png";
import john from "./assets/john1.png";
import rating from "./assets/rating1.png";
import heroText from "./assets/herotext.png";
import menu from "./assets/menu1.png";
import button from "./assets/button1.png";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-[url(/src/assets/poster1.png)] lg_pro:h-[100vh] bg-no-repeat h-[50vh] object-cover bg-contain w-[100%]">
      <div className="flex justify-between items-center px-4 py-2 lg_pro:pt-6 bg-opacity-50">
        {/* Logo */}
        <img
          src={logo1}
          className="object-cover max-w-[30%] h-auto"
          alt=""
        />
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-0 lg_pro:py-1 bg-transparent border border-white rounded-md lg_pro:w-[50vw] w-[40vw] text-white outline-white"
        />

        {/* Menu */}
        <img src={menu} className="object-cover max-w-[8%] md:max-w-[8%]  cursor-pointer" alt="" />
      </div>

      <div className="mx-5 lg_pro:mx-20 mt-2 lg_pro:mt-10 lg_pro:space-y-4 space-y-1.5">
        <img
          src={john}
          className="object-cover max-w-[31%] mt-2 lg_pro:mt-20"
          alt=""
        />
        <img
          src={rating}
          className="object-cover max-w-[31%] -mt-5  lg_pro:mt-2"
          alt=""
        />
        <img
          src={heroText}
          className="object-cover max-w-[40vw] lg_pro:w-[30vw] -mt-3  lg_pro:mt-2"
          alt=""
        />
        <img
          src={button}
          className="object-cover max-w-[20%] -mt-8  lg_pro:mt-2"
          alt=""
        />
      
      </div>
    </div>
  );
}

export default App;
