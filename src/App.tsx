import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App;
