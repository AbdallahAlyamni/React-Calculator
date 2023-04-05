import Button from "./Button"; 
import "./ButtonContainer.css";
import { useContext } from "react";
import { ThemeContext } from "./App";

function ButtonContainer(props, {children}) {

    const { theme } = useContext(ThemeContext);

    function btnClicked(params) {
        console.log("on btn container");
    }

    return(
        <div className={"transition duration-300 w-80 grid gap-2 grid-cols-4 p-4 rounded-2xl shadow-[0_0px_25px_rgb(0,0,0,0.15)] " + (theme==="dark"?"bg-[#2A2D37]":"bg-[#eeeeee]")}>
            <Button className="text-[#4CC0B0]" symbol='AC'>AC</Button>
            <Button className="text-[#4CC0B0]" symbol='+/-'>
                <div >
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" fill="#4CC0B0" width="28" height="29" viewBox="0 0 256 256" id="plus-minus"><line x1="200" x2="56" y1="56" y2="200" stroke="#4CC0B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"></line><line x1="32" x2="112" y1="72" y2="72" fill="none" stroke="#4CC0B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"></line><line x1="72" x2="72" y1="32" y2="112" fill="none" stroke="#4CC0B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"></line><line x1="144" x2="224" y1="184" y2="184" fill="none" stroke="#4CC0B0" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"></line></svg>
                </div>
            </Button>
            <Button className="text-[#4CC0B0]" symbol='%'><i className="ri-percent-line"></i></Button>
            <Button className="text-[#A37177]" symbol='/'><i className="ri-divide-line"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='7'><i className="ri-number-7"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='8'><i className="ri-number-8"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='9'><i className="ri-number-9"></i></Button>
            <Button className="text-[#A37177]" symbol='*'><i className="ri-close-fill"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='4'><i className="ri-number-4"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='5'><i className="ri-number-5"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='6'><i className="ri-number-6"></i></Button>
            <Button className="text-[#A37177]" symbol='-'><i className="ri-subtract-line"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='1'><i className="ri-number-1"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='2'><i className="ri-number-2"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='3'><i className="ri-number-3"></i></Button>
            <Button className="text-[#A37177]" symbol='+'><i className="ri-add-line"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='0'><i className="ri-number-0"></i></Button>
            <Button className={(theme=="dark" ? "text-white":"text-gray-700")} symbol='.'>.</Button>
            <Button className="col-span-2 w-full bg-orange-400" symbol='='><i className="ri-equal-line"></i></Button>
        </div>
    )
}

export default ButtonContainer;