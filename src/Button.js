import "./Button.css"

function Button(props) {

    return(
        <button className={props.className + " cal-btn"}>{props.symbol}</button>
    );
    
}

export default Button;