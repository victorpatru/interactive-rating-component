import RatingSelect from "../components/RatingSelect"
import ThankYou from "../components/ThankYou"
import { useContext } from "react"
import RatingContext from "../context/RatingContext"

function MainPage() {
    const { rating } = useContext(RatingContext)
  return (
    <div>
        { !rating ? <RatingSelect /> : <ThankYou />}
    </div>
  )
}

export default MainPage