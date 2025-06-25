import React from "react";
import { useNavigate } from "react-router-dom";

const WorkInProgress: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4">
        {/* Warning / Work in Progress Icon */}
            <svg
                className="w-24 h-24 mb-6 text-yellow-500 animate-pulse"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M4.5 19.5l15-15M19.5 19.5L4.5 4.5"
                />
            </svg>

            <h1 className="text-4xl font-bold text-yellow-700 mb-4">
                Work in Progress
            </h1>
            <p className="text-yellow-800 max-w-md text-center mb-8">
                This feature is still under development. Please check back soon for updates!
            </p>

            <button
                onClick={() => navigate("/")}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
                Back to Dashboard
            </button>
        </div>
    );
};

export default WorkInProgress;
