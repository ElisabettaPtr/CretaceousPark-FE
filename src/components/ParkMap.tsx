import L from "leaflet";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const bounds: [[number, number], [number, number]] = [[0, 0], [650, 650]];

// Crea un'icona base (opzionale)
const icon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const attractionPositions: Record<string, [number, number]> = {
    "Argentinosaurus": [500, 480],
    "Triceratops": [480, 250],
    "Tyrannosaurus rex": [550, 360],
    "Carnotaurus": [520, 80],
    "Velociraptor": [380, 270],
    "Oviraptor": [230, 240],
    "Therizinosaurus": [300, 200],
    "Spinosaurus": [260, 500],
    "Ouranosaurus": [320, 550],
    "Mosasaurus": [340, 385],
    "Elasmosaurus": [300, 360],
    // "Archelon": [480, 480],
    "Hesperornis": [360, 510],
    // "Ichthyornis": [510, 510],
    "Giant Ammonites": [320, 500],
    // "Kronosaurus": [300, 140],
    // "Xiphactinus": [300, 120],
    "Pterosaurs": [430, 510],
    "Hesperornis(flying)": [440, 495],
    "Ichthyornis(flying)": [425, 490],
    "Museum": [350, 315],
    "Genetics Lab": [375, 375],
    "Restaurants": [320, 310],
    "Shop": [350, 325]
};

const ParkMap = () => {
    const navigate = useNavigate();

    return (
        <MapContainer
        className="size-fit rounded-2xl border-2 cretaceous-yellow-border"
        crs={L.CRS.Simple}
        bounds={bounds}
        style={{ height: '650px', width: '650px' }}
        minZoom={0}
        maxZoom={4}
        maxBounds={bounds}
        maxBoundsViscosity={1}
        >
        <ImageOverlay url="/jurassic_world_map.jpg" bounds={bounds} />

        {Object.entries(attractionPositions).map(([name, position]) => (
            <Marker key={name} position={position} icon={icon}>
                <Popup>
                <div className="flex flex-col items-center">
                    <button
                    className="text-blue-600 underline hover:text-blue-800"
                    onClick={() => navigate(`/attraction/${encodeURIComponent(name)}`)}
                    >
                        <span className="mb-2 font-semibold">{name}</span>
                    </button>
                </div>
                </Popup>
            </Marker>
        ))}

        </MapContainer>
    );
};

export default ParkMap;
