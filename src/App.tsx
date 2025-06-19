import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import ParkMap from './components/ParkMap';
import Poster from './components/Poster';

function App() {

  return (
    <>
      <div className='flex cretaceous-darkgreen-bg'>
        <div className='size-1/2 h-screen'>
          <Poster />
        </div>
        <div className='m-4 bg-transparent rounded-md w-1/2 h flex items-center justify-center'>
          <ParkMap />
        </div>  
      </div>
    </>
  )
}

export default App;
