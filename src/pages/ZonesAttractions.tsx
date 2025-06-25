import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ZoneDTO = {
    id: number;
    name: string;
};

type AttractionDTO = {
    id: number;
    name: string;
    description?: string;
};

function ZonesAttractions() {
    const [zones, setZones] = useState<ZoneDTO[]>([]);
    const [expandedZoneId, setExpandedZoneId] = useState<number | null>(null);
    const [attractions, setAttractions] = useState<AttractionDTO[]>([]);
    const [loadingAttractions, setLoadingAttractions] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/zone/list")
            .then(res => res.json())
            .then(data => Array.isArray(data) ? setZones(data) : setZones([]))
            .catch(err => {
                console.error("Failed to load zones", err);
                setZones([]);
            });
    }, []);

    const toggleZone = (zoneId: number) => {
        if (expandedZoneId === zoneId) {
            setExpandedZoneId(null);
            setAttractions([]);
        } else {
            setExpandedZoneId(zoneId);
            setLoadingAttractions(true);
            fetch(`http://localhost:8080/api/attraction/zone-attractions/${zoneId}`)
                .then(res => res.json())
                .then(data => Array.isArray(data) ? setAttractions(data) : setAttractions([]))
                .catch(err => {
                    console.error("Failed to load attractions", err);
                    setAttractions([]);
                })
                .finally(() => setLoadingAttractions(false));
        }
    };

    return (
        <div className="items-center justify-center min-h-screen bg-amber-50 p-12 space-y-6">
            <h1 className="text-3xl font-bold text-center text-green-900 mb-6">Explore the Zones</h1>

            {zones.length > 0 ? (
                <div className="space-y-4">
                    {zones.map(zone => (
                        <div key={zone.id} className="border border-green-900 bg-white rounded-xl shadow-md">
                            <button
                                onClick={() => toggleZone(zone.id)}
                                className="w-full flex justify-between items-center text-left p-4 font-semibold text-green-900 hover:bg-amber-100 rounded-xl transition"
                            >
                                <span>{zone.name}</span>
                                <span className="text-green-700">{expandedZoneId === zone.id ? "▲" : "▼"}</span>
                            </button>

                            {expandedZoneId === zone.id && (
                                <div className="p-4 border-t border-green-200">
                                    {loadingAttractions ? (
                                        <p className="text-sm text-green-700 italic">Loading attractions...</p>
                                    ) : attractions.length > 0 ? (
                                        <ul className="space-y-3">
                                            {attractions.map(attr => (
                                                <li
                                                    key={attr.id}
                                                    onClick={() => {
                                                        console.log("Navigating to:", `/attraction/${attr.name}`);
                                                        navigate(`/attraction/${encodeURIComponent(attr.name)}`);
                                                    }}
                                                    className="cursor-pointer p-3 rounded-lg border bg-amber-100 border-green-300 hover:bg-amber-200 transition"
                                                >
                                                    <p className="font-medium text-green-900">{attr.name}</p>
                                                    {attr.description && (
                                                        <p className="text-sm text-green-800">{attr.description}</p>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-green-700 italic">No attractions found.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-lg">
                    No zones available.
                </div>
            )}
        </div>
    );
}

export default ZonesAttractions;
