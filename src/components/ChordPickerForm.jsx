const ChordPickerForm = () => {

    return (
        <form className="chord-picker"> 
            <label htmlFor="root-select">Choose a Root:</label>

            <select name="roots" id="root-select">
                <option value="">--Choose a Root--</option>
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

            <label htmlFor="quality-select">Choose a Chord Quality:</label>

            <select name="roots" id="root-select">
                <option value="">--Choose a Quality--</option>
                <option value="major">Major</option>
                <option value="minor">Minor</option>
            </select>   

            <button className="submit">Submit</button>         
        </form>
    )
}

export default ChordPickerForm