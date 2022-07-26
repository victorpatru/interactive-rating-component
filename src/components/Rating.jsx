import { useState } from "react"

function Rating() {

    const [ selected, setSelected ] = useState()

    const handleChange = (e) => {
        setSelected(+e.target.value)
    }

    return (
        <form>
            <ul className='rating'>
            {Array.from({ length: 5 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                <input
                    type='button'
                    id={`num${i + 1}`}
                    name='rating'
                    value={i + 1}
                    onClick={handleChange}
                    style={{
                        backgroundColor: selected === i + 1 ? 'salmon' : 'hsl(213, 19%, 18%)',
                        color: 'hsl(0, 0%, 100%)'
                    }}
                />
                </li>
            ))}
            </ul>
            <button className="button">Submit</button>
        </form>
      )
}


export default Rating