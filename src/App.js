import { RatingProvider } from "./context/RatingContext";
import MainPage from "./pages/MainPage"

function App() {

  return (
    <RatingProvider>
      <MainPage />
    </RatingProvider>
  );
}

export default App;
