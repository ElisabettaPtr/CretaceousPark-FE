import ParkMap from "@/components/ParkMap";
import Poster from "@/components/Poster";

const Dashboard = () => {
    return (
        <div className='flex bg-gradient-to-b from-green-800 via-amber-100 to-yellow-900 h-screen'>
            <div className='m-4 bg-transparent rounded-md w-1/2 flex items-center justify-center'>
                <Poster />
            </div>
            <div className='m-4 bg-transparent rounded-md w-1/2 flex items-center justify-center'>
                <ParkMap />
            </div>  
        </div>
    )
}

export default Dashboard;
