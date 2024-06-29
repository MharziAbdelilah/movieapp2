import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MoviesDesc from './componentMovies/MoviesDesc'
import AddMovie from './componentMovies/AddMovie'
function App() {
  return (    
<>
    <Router>
      <Routes>
        <Route path="/" element={<AddMovie/>} />
        <Route path="/moviesDesc" element={<MoviesDesc/>} />
      </Routes>
    </Router>
</>
  );
}

export default App;
