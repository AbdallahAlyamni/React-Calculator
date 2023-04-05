import { useState, createContext } from "react";
import ButtonContainer from "./ButtonContainer";
import CalculatorInput from "./CalculatorInput";
import 'remixicon/fonts/remixicon.css'

export const CalculatorContext = createContext(null);

function App() {
  const [ value, setValue ] = useState("");
  const handleClick = () => setValue(1);
  function btnClicked(params) {
    console.log("on App");
  }

  return (
    <>
        <CalculatorContext.Provider value={{ value: value, setValue: setValue }}>
          <div className="container flex content-center w-full h-full justify-center mt-20">
            <div className="pt-10 rounded-2xl shadow-[0_0px_25px_rgb(0,0,0,0.15)] bg-[#22252D]">
            <div className="flex justify-center w-full -mt-14">
              <div className="w-20 grid grid-cols-2 h-8 shadow-[0_0px_25px_rgb(0,0,0,0.15)] bg-[#2A2D37] rounded-xl">
                <button className="rounded-l-xl"><i className="ri-moon-line"></i></button>
                <button className="rounded-r-xl"><i className="ri-sun-line text-white/20"></i></button>
              </div>
            </div>
            <CalculatorInput input={value}></CalculatorInput>
            <ButtonContainer onBtnClick={btnClicked}></ButtonContainer>
            </div>
          </div>
        </CalculatorContext.Provider>
    </>
  );
}

export default App;
