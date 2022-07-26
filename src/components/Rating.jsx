function Rating() {

    const handleChange = (e) => {
        console.log(`clicked button ${e.target.value}`)
    }
    return (
        <ul className='rating'>
          {Array.from({ length: 5 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='button'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onClick={handleChange}
                // checked={selected === i + 1}
              />
            </li>
          ))}
        </ul>
      )
}

export default Rating