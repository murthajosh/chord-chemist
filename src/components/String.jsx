import Fret from "./Fret"

const String = (props) => {

    const frets = document.querySelectorAll('.fret')

    frets.forEach((fret) => {
        if (fret.classList.contains(props.frettoshow)) {
            fret.classList.add('fret-on')
        }
    })
    
    return (
        <div className="string" id={props.id} frettoshow={props.fretToShow}>
            <Fret className="fret 0" fretCheck={props.frettoshow}/> 
            <Fret className="fret 1" fretCheck={props.frettoshow}/> 
            <Fret className="fret 2" fretCheck={props.frettoshow}/> 
            <Fret className="fret 3 single-fretmark" fretCheck={props.frettoshow}/> 
            <Fret className="fret 4" fretCheck={props.frettoshow}/> 
            <Fret className="fret 5 single-fretmark" fretCheck={props.frettoshow}/> 
            <Fret className="fret 6" fretCheck={props.frettoshow}/> 
            <Fret className="fret 7 single-fretmark" fretCheck={props.frettoshow}/> 
            <Fret className="fret 8" fretCheck={props.frettoshow}/> 
            <Fret className="fret 9 single-fretmark" fretCheck={props.frettoshow}/> 
            <Fret className="fret 10" fretCheck={props.frettoshow}/> 
            <Fret className="fret 11" fretCheck={props.frettoshow}/> 
            <Fret className="fret 12 double-fretmark" fretCheck={props.frettoshow}/> 
            <Fret className="fret 13" fretCheck={props.frettoshow}/> 
            <Fret className="fret 14" fretCheck={props.frettoshow}/>  
            <Fret className="fret 15 single-fretmark" fretCheck={props.frettoshow}/>          
        </div>
    )
}

export default String