import { createContext, useState } from "react";

const RatingContext = createContext();


export const RatingProvider = ({ children }) => {
    const [ rating, setRating ] = useState()

    return (
        <RatingContext.Provider value={{
            rating,
            setRating
        }}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingContext;