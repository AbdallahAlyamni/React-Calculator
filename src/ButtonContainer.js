import Button from "./Button"; 
import "./ButtonContainer.css";

function ButtonContainer(props, {children}) {

    return(
        <div className="w-80 grid gap-2 grid-cols-4 bg-[#2A2D37] p-4 rounded-2xl drop-shadow-xl">
            <Button className="text-[#4CC0B0]" symbol='AC'></Button>
            <Button className="text-[#4CC0B0]" symbol='+/-'></Button>
            <Button className="text-[#4CC0B0]" symbol='%'></Button>
            <Button className="text-[#A37177]" symbol='/'></Button>
            <Button symbol='7'></Button>
            <Button symbol='8'></Button>
            <Button symbol='9'></Button>
            <Button className="text-[#A37177]" symbol='x'></Button>
            <Button symbol='4'></Button>
            <Button symbol='5'></Button>
            <Button symbol='6'></Button>
            <Button className="text-[#A37177]" symbol='-'></Button>
            <Button symbol='1'></Button>
            <Button symbol='2'></Button>
            <Button symbol='3'></Button>
            <Button className="text-[#A37177]" symbol='+'></Button>
            <Button symbol='0'></Button>
            <Button className = "" symbol='.'></Button>
            <Button className="col-span-2 w-full bg-orange-400" symbol='='></Button>
        </div>
    )
}

export default ButtonContainer;