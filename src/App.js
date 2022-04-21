import './App.css';
import axios from 'axios'
import { BASE_URL} from './globals'
import { useEffect, useState } from 'react'
import Fretboard from './components/Fretboard'

const rootOptions = [
  {label: "A",
    value: "A",
  },
  {label: "A#",
    value: "A#",
  },
  {label: "B",
    value: "B",
  },
  {label: "C",
    value: "C",
  },
  {label: "C#",
    value: "C#",
  },
  {label: "D",
    value: "D",
  },
  {label: "D#",
    value: "D#",
  },
  {label: "E",
    value: "E",
  },
  {label: "F",
    value: "F",
  },
  {label: "F#",
    value: "F#",
  },
  {label: "G",
    value: "G",
  },
  {label: "G#",
    value: "G#",
  },
]

const App = () => {

  const [rootState, setRootState] = useState('A')
  const [chordData, setChordData] = useState([])

  const getChord = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/chords/${rootState}`)
        setChordData(response.data[0].strings)
        console.log(chordData)
      } catch(err) {
          console.log(err)
      }
  } 

  return (
    <div className="App">
      <select name="roots" id="chord-select" onChange={(e) => {
        setRootState(e.target.value)
      }}>
          {rootOptions.map((rootOption) => (
              <option key={rootOption.value} value={rootOption.value}>{rootOption.label}</option>
          ))}
      </select>
      {rootState}
      <button onClick={getChord}>Click Me</button>
      <Fretboard />
    </div>
  );
}

export default App;
