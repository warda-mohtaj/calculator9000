function OperatorButton({handleClickOperator}) {
    const operators = [..."/*-+"];

    return (
        <>
            <p>{operators.map((operator, index) => <button key={index} onClick={handleClickOperator} value={operator}>{operator}</button>)}</p>
        </>
    );
} 

export default OperatorButton;