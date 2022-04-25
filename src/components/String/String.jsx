import Fret from "../Fret/Fret"

const String = (props) => {
    
    return (
        <div className="string" id={props.id} fretToShow={props.fretToShow}>
            <Fret className="fret 0" fretNumber={0} fretToShow={props.fretToShow}/> 
            <Fret className="fret 1" fretNumber={1} fretToShow={props.fretToShow} /> 
            <Fret className="fret 2" fretNumber={2} fretToShow={props.fretToShow} /> 
            <Fret className="fret 3 single-fretmark" fretNumber={3} fretToShow={props.fretToShow}/> 
            <Fret className="fret 4" fretNumber={4} fretToShow={props.fretToShow}/> 
            <Fret className="fret 5 single-fretmark" fretNumber={5} fretToShow={props.fretToShow}/> 
            <Fret className="fret 6" fretNumber={6} fretToShow={props.fretToShow}/> 
            <Fret className="fret 7 single-fretmark" fretNumber={7} fretToShow={props.fretToShow}/> 
            <Fret className="fret 8" fretNumber={8} fretToShow={props.fretToShow}/> 
            <Fret className="fret 9 single-fretmark" fretNumber={9} fretToShow={props.fretToShow}/> 
            <Fret className="fret 10" fretNumber={10} fretToShow={props.fretToShow}/> 
            <Fret className="fret 11" fretNumber={11} fretToShow={props.fretToShow}/> 
            <Fret className="fret 12 double-fretmark" fretNumber={12} fretToShow={props.fretToShow}/> 
            <Fret className="fret 13" fretNumber={13} fretToShow={props.fretToShow}/> 
            <Fret className="fret 14" fretNumber={14} fretToShow={props.fretToShow}/>  
            <Fret className="fret 15 single-fretmark" fretNumber={15} fretToShow={props.fretToShow}/>          
        </div>
    )
}

export default String