import './App.css';
import Fretboard from './components/Fretboard'
import axios from 'axios'
import { BASE_URL} from './globals'
import { useEffect } from 'react'
import ChordPickerForm from './components/ChordPickerForm';


function App() {

  useEffect(() => {
    const getChords = async () => {
      const response = await axios.get(`${BASE_URL}/chords/G`)
      console.log(response.data[0].strings)
    }
    getChords()
  }, [])
  
  return (
    <div className="App">
      <ChordPickerForm />
      <Fretboard />
    </div>
  );
}

export default App;
