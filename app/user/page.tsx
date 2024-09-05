
"use client";
import React from 'react';
import useFileUpload from '@/lib/file-upload';

const FileUploadComponent = () => {
    const { isUploading, handleFileChange, handleUpload } = useFileUpload();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mb-4 w-full text-gray-700"
                />
                <button
                    onClick={handleUpload}
                    className={`w-full py-2 px-4 rounded ${isUploading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
                        } text-white font-bold`}
                    disabled={isUploading}
                >
                    {isUploading ? 'Uploading...' : 'Upload File'}
                </button>
            </div>
        </div>
    );
};

export default FileUploadComponent;