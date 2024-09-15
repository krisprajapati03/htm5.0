import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader rounded-full border-t-4 border-b-4 border-blue-500 w-16 h-16 animate-spin"></div>
        </div>
    );
};

export default Loader;
