import Fret from "./Fret"

const String = (props) => {

    const frets = document.querySelectorAll('.fret')

    frets.forEach((fret) => {
        if (fret.classList.contains(props.fretToShow)) {
            fret.classList.add('fret-on')
        }
    })
    
    return (
        <div className="string" id={props.id} fretToShow={props.fretToShow}>
            <Fret className="fret 0"/> 
            <Fret className="fret 1"/> 
            <Fret className="fret 2"/> 
            <Fret className="fret 3 single-fretmark"/> 
            <Fret className="fret 4"/> 
            <Fret className="fret 5 single-fretmark"/> 
            <Fret className="fret 6"/> 
            <Fret className="fret 7 single-fretmark"/> 
            <Fret className="fret 8"/> 
            <Fret className="fret 9 single-fretmark"/> 
            <Fret className="fret 10"/> 
            <Fret className="fret 11"/> 
            <Fret className="fret 12 double-fretmark"/> 
            <Fret className="fret 13"/> 
            <Fret className="fret 14"/>  
            <Fret className="fret 15 single-fretmark"/>          
        </div>
    )
}

export default String