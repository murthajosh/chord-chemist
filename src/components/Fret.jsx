const Fret = (props) => {

    return (
        <div className={props.className} fretnumber={props.fretnumber} fretToShow={props.fretToShow}>
            {props.fretNumber == props.fretToShow ? (
            <div className="circle"></div>
            ) : (<div className="fuck-this"></div>)}
            
        </div>
    )
}

export default Fret