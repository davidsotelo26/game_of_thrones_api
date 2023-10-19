import { Route, Router, Routes } from 'react-router-dom';
import CronologyPage from './pages/CronologyPage.jsx/CronologyPage';
import HousesPage from './pages/HousesPage/HousesPage';
import Menu from './components/Menu/Menu';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <>
        <Menu />

        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/characters" element={<CharactersPage/>}/>
          <Route path="/houses" element={<HousesPage/>}/>
          <Route path="/cronology" element={<CronologyPage/>}/>
        </Routes>

      </>
    </Router>
  );
}

export default App;
