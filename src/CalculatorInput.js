function CalculatorInput(props) {

    return(
        <>
        <input value={props.input} type="text" disabled className="w-80 bg-transparent text-right text-white caret-transparent font-semibold text-4xl py-5 pl-9 pr-9 focus:bg-transparent focus:outline-none focus:border-0 shadow-sm ring-0"></input>
        </>
    )
    
}

export default CalculatorInput