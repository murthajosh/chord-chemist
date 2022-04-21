import { BASE_URL} from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import String from './String'

const Fretboard = (props) => {


    return (
        <div className="fretboard" chord-data={props.chordData}> 
            <String id="high-e-string" fretToShow={props.chordData[10]}/>  
            <String id="b-string" fretToShow={props.chordData[8]}/>  
            <String id="g-string" fretToShow={props.chordData[6]}/>  
            <String id="d-string" fretToShow={props.chordData[4]}/>  
            <String id="a-string" fretToShow={props.chordData[2]}/>  
            <String id="low-e-string" fretToShow={props.chordData[0]}/>              
        </div>
    )
}

export default Fretboard