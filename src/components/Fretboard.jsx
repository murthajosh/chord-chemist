import { BASE_URL} from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import String from './String'

const Fretboard = (props) => {

    return (
        <div className="fretboard"> 
            <String id="high-e-string" displayedNote={props.displayedNote}/>  
            <String id="b-string" displayedNote={props.displayedNote}/>  
            <String id="g-string" displayedNote={props.displayedNote}/>  
            <String id="d-string" displayedNote={props.displayedNote}/>  
            <String id="a-string" displayedNote={props.displayedNote}/>  
            <String id="low-e-string" displayedNote={props.displayedNote}/>              
        </div>
    )
}

export default Fretboard