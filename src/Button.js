import { useContext } from "react";
import { CalculatorContext } from "./App";
import "./Button.css"
import 'remixicon/fonts/remixicon.css'

function Button(props) {

    const { value, setValue } = useContext(CalculatorContext);

    function btnClicked(e) {
        console.log(props.symbol);
        switch (props.symbol) {
            case "AC":
                setValue("");
                break;
            case "+/-":
                if (value.charAt(value.length-1) in ["+","/","*","-"]) {
                    setValue(value+'-');
                } else {
                    setValue(value+'*-');
                }
                break;
            case "%":
                setValue("");
                break;
            case "=":
                setValue(Math.floor(eval(value) * 10000) / 10000);
                break;
        
            default:
                let newval = value+props.symbol;
                setValue(newval)
                console.log(value);
                break;
        }
    }

    return(
        <button onClick={btnClicked} className={props.className + " cal-btn"}>
           {props.children}
            </button>
    );
    
}

export default Button;