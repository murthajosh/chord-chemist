const ChordPickerForm = (props) => {

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

    return (

        <form className="chord-picker">

            <label htmlFor="root-select">Choose a Chord:</label>

            <select name="roots" id="root-select">
                {rootOptions.map((rootOption) => (
                    <option key={rootOption.value} value={rootOption.value}>{rootOption.label}</option>
                ))}
            </select>  

        </form>
    )
}

export default ChordPickerForm