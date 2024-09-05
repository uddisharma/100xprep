import { useState } from 'react';
import { useUploadThing } from '@/lib/uploadthing';
import { toast } from 'sonner';

const useFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { startUpload, isUploading } = useUploadThing("imageUploader");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first.");
            return;
        }

        try {
            const response: any = await startUpload([selectedFile]);
            return response[0].url;
        } catch (error: any) {
            return toast.error(error?.message || "Something went wrong");
        }
    };

    return {
        selectedFile,
        isUploading,
        handleFileChange,
        handleUpload,
    };
};

export default useFileUpload;