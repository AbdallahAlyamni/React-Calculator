import { useState, createContext, useContext } from "react";

const CalculatorContext = createContext();

const CalculatorProvider = ({children}) => {
    const [value, setValue] = useState("okok");

    return(
        <CalculatorContext.Provider value={{ value: value, setValue: setValue }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculatorContext = () => useContext(CalculatorContext);
export default CalculatorProvider;