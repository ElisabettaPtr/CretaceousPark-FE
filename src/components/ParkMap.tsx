import L from "leaflet";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";

const bounds: [[number, number], [number, number]] = [[0, 0], [600, 600]];

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
    "Argentinosaurus": [80, 520],
    "Triceratops": [130, 520],
    "Tyrannosaurus rex": [100, 480],
    "Carnotaurus": [140, 480],
    "Velociraptor": [100, 220],
    "Oviraptor": [130, 230],
    "Therizinosaurus": [110, 260],
    "Spinosaurus": [310, 480],
    "Ouranosaurus": [290, 520],
    "Mosasaurus": [480, 520],
    "Elasmosaurus": [520, 500],
    "Archelon": [480, 480],
    "Hesperornis": [520, 530],
    "Ichthyornis": [510, 510],
    "Giant Ammonites": [490, 540],
    "Kronosaurus": [510, 140],
    "Xiphactinus": [480, 120],
    "Pterosaurs": [320, 120],
    "Hesperornis (Flying)": [280, 150],
    "Ichthyornis (Flying)": [330, 180],
    "Museum": [300, 320],
    "Genetics Lab": [350, 320],
    "Restaurants": [280, 350],
    "Shop": [320, 350]
};

const ParkMap = () => {
    return (
        <MapContainer
        className="size-fit rounded-md border-2 cretaceous-beige-border"
        crs={L.CRS.Simple}
        bounds={bounds}
        style={{ height: '600px', width: '600px' }}
        minZoom={0}
        maxZoom={4}
        maxBounds={bounds}
        maxBoundsViscosity={1}
        >
        <ImageOverlay url="/IslaNublar.webp" bounds={bounds} />

        {Object.entries(attractionPositions).map(([name, position]) => (
            <Marker key={name} position={position} icon={icon}>
            <Popup>{name}</Popup>
            </Marker>
        ))}
        </MapContainer>
    );
};


export default ParkMap;
