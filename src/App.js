import { useState, createContext, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import CalculatorInput from "./CalculatorInput";
import 'remixicon/fonts/remixicon.css'

export const CalculatorContext = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  const [ value, setValue ] = useState("");
  const [ theme, setTheme ] = useState("dark");
  const handleThemeChange = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    setTheme(e.target.name==="dark" || e.target.id==="dark" ?"dark":"light")
  };
  function btnClicked(params) {
    console.log("on App");
  }

  useEffect(()  => {
    if (theme === "dark") {
      // document.body.classList.replace('bg-white','bg-[#2A2D37]');
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-[#2A2D37]');
    } else {
      document.body.classList.remove('bg-[#2A2D37]');
      document.body.classList.add('bg-white');
    }
  },[theme]);

  return (
    <>
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <div className="container flex content-center w-full h-full justify-center mt-20">
            <div className={"transition duration-300 pt-10 rounded-2xl shadow-[0_0px_25px_rgb(0,0,0,0.15)] " + (theme==="dark"?"bg-[#22252D]":"bg-[#ffffff]")}>
            <div className="flex justify-center w-full -mt-14">
              <div className={"transition duration-300 w-20 grid grid-cols-2 h-8 shadow-[0_0px_25px_rgb(0,0,0,0.15)] rounded-xl "+ (theme==="dark"?"bg-[#2A2D37]":"bg-[#ffffff]")}>
                <button name="dark" onClick={handleThemeChange} className="rounded-l-xl"><i id="dark" className={"transition duration-300 ri-moon-line "+(theme==="dark"?"text-white/100":"text-black/30")}></i></button>
                <button name="light" onClick={handleThemeChange} className="rounded-r-xl"><i id="light" className={"transition duration-300 ri-sun-line "+(theme==="dark"?"text-white/20":"text-black/70")}></i></button>
              </div>
            </div>
            <CalculatorContext.Provider value={{ value: value, setValue: setValue }} theme={{ theme: theme, setTheme: setTheme }}>
            <CalculatorInput input={value}></CalculatorInput>
            <ButtonContainer onBtnClick={btnClicked}></ButtonContainer>
            </CalculatorContext.Provider>
            </div>
          </div>
        </ThemeContext.Provider>
    </>
  );
}

export default App;
