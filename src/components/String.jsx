import Fret from "./Fret"

const String = (props) => {
    
    return (
        <div className="string" id={props.id}>
            <Fret className="fret"  id="fret-0"/> 
            <Fret className="fret" id="fret-1"/> 
            <Fret className="fret" id="fret-2"/> 
            <Fret className="fret single-fretmark" id="fret-3"/> 
            <Fret className="fret" id="fret-4"/> 
            <Fret className="fret single-fretmark" id="fret-5"/> 
            <Fret className="fret" id="fret-6"/> 
            <Fret className="fret single-fretmark" id="fret-7"/> 
            <Fret className="fret" id="fret-8"/> 
            <Fret className="fret single-fretmark" id="fret-9"/> 
            <Fret className="fret" id="fret-10"/> 
            <Fret className="fret" id="fret-11"/> 
            <Fret className="fret double-fretmark" id="fret-12"/> 
            <Fret className="fret" id="fret-13"/> 
            <Fret className="fret" id="fret-14"/>  
            <Fret className="fret single-fretmark" id="fret-15"/>          
        </div>
    )
}

export default String