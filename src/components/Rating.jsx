import { useContext, useState } from "react"
import RatingContext from "../context/RatingContext"

function Rating() {

    const [ selected, setSelected ] = useState()

    const { setRating } = useContext(RatingContext)

    const handleChange = (e) => {
        setSelected(+e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!selected) {
            alert('Please choose a rating!')
        } else {
            setRating(+e.currentTarget.firstChild.children[selected - 1].children[0].value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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