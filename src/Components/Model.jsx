import React from 'react'

const Model = ({ isModelOpen, setIsModelOpen, children }) => {
    if (!isModelOpen) return null;
    
    return (
        <div 
            className="fixed inset-0 bg-gray-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={() => setIsModelOpen(false)}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <div className="flex justify-end p-2">
                    <button 
                        className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-200"
                        onClick={() => setIsModelOpen(false)}
                    >
                        <span className="text-xl text-gray-500 hover:text-gray-700">
                            &times;
                        </span>
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Model 