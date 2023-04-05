import { useContext } from "react"
import { ThemeContext } from "./App"

function CalculatorInput(props) {

    const { theme } = useContext(ThemeContext)

    return(
        <>
        <input value={props.input} type="text" disabled className={"transition w-80 bg-transparent text-right caret-transparent font-semibold text-4xl py-5 pl-9 pr-9 focus:bg-transparent focus:outline-none focus:border-0 ring-0 " + (theme==="dark"?"text-white":"text-gray-700")}></input>
        </>
    )
    
}

export default CalculatorInput