const ChordPickerForm = (props) => {

    return (

        <form className="chord-picker">

            <label htmlFor="root-select">Choose a Chord:</label>

            <select name="roots" id="root-select">
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