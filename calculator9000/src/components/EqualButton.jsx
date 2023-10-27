
function EqualButton(props) {
    const equal = "=";

    return (
        <>
            <button className="equalButton" onClick={() => {props.handleSetResult(props.operation)}} >{equal}</button>
        </>
    );
} 

export default EqualButton;