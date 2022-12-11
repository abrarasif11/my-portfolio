import React from 'react';

const Spinner = () => {
    return (
        <div className="w-16 h-16 mt-72 border-4 mx-auto space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-800"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-800"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-800"></div>
        </div>
    );
};

export default Spinner;