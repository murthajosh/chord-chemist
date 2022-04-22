import './App.css';
import axios from 'axios'
import { BASE_URL} from './globals'
import { useEffect, useState } from 'react'
import Fretboard from './components/Fretboard'

const rootOptions = [
  {label: "A",
    value: "A",
  },
  {label: "Bb",
    value: "Bb",
  },
  {label: "B",
    value: "B",
  },
  {label: "C",
    value: "C",
  },
  {label: "Db",
    value: "Db",
  },
  {label: "D",
    value: "D",
  },
  {label: "Eb",
    value: "Eb",
  },
  {label: "E",
    value: "E",
  },
  {label: "F",
    value: "F",
  },
  {label: "Gb",
    value: "Gb",
  },
  {label: "G",
    value: "G",
  },
  {label: "Ab",
    value: "Ab",
  },
]

const qualityOptions = [
  {label: "Maj",
   value: "",},
   {label: "Min",
  value: "m",},
]

const App = () => {

  const [rootState, setRootState] = useState('A')
  const[qualityState, setQualityState] = useState('')
  const [chordData, setChordData] = useState([])

  const getChord = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/chords/${rootState}_${qualityState}`)
        setChordData(response.data[0].strings)
        console.log(response.data[0].strings)
      } catch(err) {
          console.log(err)
      }
  } 

  return (
    <div className="App">
      <header>
        <svg width="91" height="64" viewBox="0 0 91 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="38.5354" y1="60.3477" x2="57.7662" y2="46.4054" stroke="black" stroke-width="7.69231"/>
        <line x1="38.3668" y1="14.9252" x2="59.5207" y2="26.9445" stroke="black" stroke-width="7.69231"/>
        <circle cx="24.9271" cy="75.9615" r="20.1923" stroke="black" stroke-width="7.69231"/>
        <circle cx="71.5608" cy="38.9423" r="15.3846" stroke="black" stroke-width="7.69231"/>
        <circle cx="31.1774" cy="12.0192" r="8.17307" stroke="black" stroke-width="7.69231"/>
        </svg>
        <h1>ChordChemist</h1>
      </header>
      <div className="controls">
        <select name="roots" id="chord-select" onChange={(e) => {
          setRootState(e.target.value)
        }}> 
             <option value="" disabled selected>Choose Root</option>
            {rootOptions.map((rootOption) => (
                <option key={rootOption.value} value={rootOption.value}>{rootOption.label}</option>
            ))}
        </select>

        <select name="qualities" id="quality-select" onChange={(e) => {
          setQualityState(e.target.value)
        }}> 
             <option value="" disabled selected>Maj or Min?</option>
            {qualityOptions.map((qualityOption) => (
                <option key={qualityOption.value} value={qualityOption.value}>{qualityOption.label}</option>
            ))}
        </select>

        <button className="show-chord-button"onClick={getChord}>Show Chord</button>
      </div>
      <Fretboard chordData={chordData}/>
    </div>
  );
}

export default App;
