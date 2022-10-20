import "./button.css"
const Button = (props)=> {
    return (
        <button className="butn" onClick={props.functionName}>
            {props.text}
        </button>
    )
}
export default Button