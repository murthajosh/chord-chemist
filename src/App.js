import './App.css';
import axios from 'axios'
import { BASE_URL} from './globals'
import { useEffect, useState } from 'react'
import ChordSelect from './components/ChordSelect';
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

  const [rootState, setrootState] = useState('')

  return (
    <div className="App">
      <select name="roots" id="chord-select" value={rootState} onChange={(e) => {
        const selectedRoot = e.target.value
        setrootState(selectedRoot)
      }}>
          {rootOptions.map((rootOption) => (
              <option key={rootOption.value} value={rootOption.value}>{rootOption.label}</option>
          ))}
      </select>
      {rootState}
      <Fretboard />
    </div>
  );
}

export default App;
