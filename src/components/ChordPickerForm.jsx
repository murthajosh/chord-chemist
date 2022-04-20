const ChordPickerForm = (props) => {

    const setChord = () => {
        const chord = document.getElementById('root-select').value
        alert(chord)
    }

    const chordPicker = document.getElementById('root-select')

    return (

        <form className="chord-picker">

            <label htmlFor="root-select">Choose a Chord:</label>

            <select name="roots" id="root-select" onChange={setChord}>
                <option value="C">--Choose a Chord--</option>
                <option value="a">A</option>
                <option value="a#">A#</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="c#">C#</option>
                <option value="d">D</option>
                <option value="d#">D#</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="f#">F#</option>
                <option value="g">G</option>
                <option value="g#">G#</option>
            </select>  

        </form>
    )
}

export default ChordPickerForm