import React, { useState, useEffect } from "react";

export type DangerLevel = "MAYBE_SAFE_MAYBE_THERE_ARE_RAPTORS" | "LOW" | "MEDIUM" | "HIGH" | "EXTREME";

export interface AttractionDTO {
    id: number | null;
    name: string;
    description: string;
    dangerLevel: DangerLevel;
    zoneId: number | null;
}

interface Props {
    attractionName: string;
}

const getDangerBadgeStyle = (level: DangerLevel): string => {
    switch (level) {
        case "LOW":
        return "bg-green-200 text-green-900";
        case "MEDIUM":
        return "bg-yellow-200 text-yellow-900";
        case "HIGH":
        return "bg-orange-200 text-orange-900";
        case "EXTREME":
        return "bg-red-200 text-red-900";
        case "MAYBE_SAFE_MAYBE_THERE_ARE_RAPTORS":
        return "bg-purple-200 text-purple-900";
        default:
        return "bg-gray-200 text-gray-800";
    }
};

const formatDangerLevel = (level: DangerLevel): string => {
    switch (level) {
        case "LOW":
        return "Low";
        case "MEDIUM":
        return "Medium";
        case "HIGH":
        return "High";
        case "EXTREME":
        return "Extreme";
        case "MAYBE_SAFE_MAYBE_THERE_ARE_RAPTORS":
        return "Maybe safe... or maybe there are raptors";
        default:
        return level;
    }
};

const AttractionDetail: React.FC<Props> = ({ attractionName }) => {
    const [attraction, setAttraction] = useState<AttractionDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(
        `http://localhost:8080/api/attraction/name/${encodeURIComponent(
            attractionName
        )}`
        )
        .then((res) => {
            if (!res.ok) throw new Error("Error loading attraction");
            return res.json();
        })
        .then((data: AttractionDTO) => {
            setAttraction(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [attractionName]);

    if (loading)
        return (
        <div className="flex justify-center items-center py-8 text-green-700 italic">
            Loading...
        </div>
        );

    if (error)
        return (
        <div className="text-center text-red-600 font-semibold py-8">
            Error: {error}
        </div>
        );

    if (!attraction)
        return (
        <div className="text-center text-gray-600 py-8">No data found.</div>
        );

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-green-800 via-amber-100 to-yellow-900 p-4">
            <div className="max-w-xl w-full bg-amber-50 p-8 rounded-2xl shadow-2xl border-2 cretaceous-yellow-border space-y-6">
            <h2 className="text-3xl font-bold text-green-900">{attraction.name}</h2>

            <p className="text-green-800 leading-relaxed">{attraction.description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 text-green-700 text-sm font-medium">
                <div>
                Danger Level:{" "}
                <span
                    className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${getDangerBadgeStyle(
                    attraction.dangerLevel
                    )}`}
                >
                    {formatDangerLevel(attraction.dangerLevel)}
                </span>
                </div>

                <div>
                Zone ID:{" "}
                <span className="font-normal">
                    {attraction.zoneId !== null ? attraction.zoneId : "Not specified"}
                </span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AttractionDetail;
