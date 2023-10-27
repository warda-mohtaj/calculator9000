function BeautifulScreen({operation, opResult}) {
    return (
        <>
            <div className="operation"><p>{operation}</p></div>
            <div className="result"><p>{opResult}</p></div>
        </>
    );
} 

export default BeautifulScreen;