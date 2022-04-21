import { BASE_URL} from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import String from './String'

const Fretboard = (props) => {

    return (
        <div className="fretboard"> 
            <String id="high-e-string"/>  
            <String id="b-string"/>  
            <String id="g-string"/>  
            <String id="d-string"/>  
            <String id="a-string"/>  
            <String id="low-e-string"/>              
        </div>
    )
}

export default Fretboard