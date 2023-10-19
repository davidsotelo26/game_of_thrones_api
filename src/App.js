import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CronologyPage from './pages/CronologyPage.jsx/CronologyPage';
import HousesPage from './pages/HousesPage/HousesPage';
import Menu from './components/Menu/Menu';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage';
import "./style.css";

function App() {
  return (
    <Router>
      <div class = "estilo-main">
        <Menu />

        <Routes>
          <Route path="home" element={<HomePage/>}/>
          <Route path="characters" element={<CharactersPage/>}/>
          <Route path="houses" element={<HousesPage/>}/>
          <Route path="cronology" element={<CronologyPage/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
