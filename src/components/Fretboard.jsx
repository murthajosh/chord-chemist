import { BASE_URL} from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import String from './String'

const Fretboard = (props) => {


    return (
        <div className="fretboard" chord-data={props.chordData}> 
            <String id="high-e-string" frettoshow={parseInt(props.chordData[10])}/>  
            <String id="b-string" frettoshow={parseInt(props.chordData[8])}/>  
            <String id="g-string" frettoshow={parseInt(props.chordData[6])}/>  
            <String id="d-string" frettoshow={parseInt(props.chordData[4])}/>  
            <String id="a-string" frettoshow={parseInt(props.chordData[2])}/>  
            <String id="low-e-string" frettoshow={parseInt(props.chordData[0])}/>              
        </div>
    )
}

export default Fretboard