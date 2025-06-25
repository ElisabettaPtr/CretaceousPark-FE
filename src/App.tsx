import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import CustomerForm from './pages/CustomerForm';
import ZonesAttractions from './pages/ZonesAttractions';
import AttractionDetail from './pages/AttractionDetail';
import WorkInProgress from './pages/WorkInProgress';

function AttractionDetailWrapper() {
  const { name } = useParams<{ name: string }>();
  if (!name) return <>Nome attrazione non valido</>;
  return <AttractionDetail attractionName={name} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/save-self" element={<CustomerForm />} />
      <Route path="/zones-attractions" element={<ZonesAttractions />} />
      <Route path="/attraction/:name" element={<AttractionDetailWrapper />} />
      <Route path="/work-in-progress" element={<WorkInProgress />} />
      <Route path="*" element={<>Page not found!</>} />
    </Routes>
  )
}

export default App;
