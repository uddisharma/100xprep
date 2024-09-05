import { useState } from 'react';
import { useUploadThing } from '@/lib/uploadthing';
import { toast } from 'sonner';

const useFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<{
        photo: File | null;
        resume: File | null;
        pdf: File | null;
    }>({
        photo: null,
        resume: null,
        pdf: null,
    });

    const { startUpload, isUploading } = useUploadThing("generalMedia");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fileType: 'photo' | 'pdf') => {
        const file = event.target.files?.[0] || null;
        setSelectedFile((prev) => ({ ...prev, [fileType]: file }));
    };
    const handleUpload = async (fileType: 'photo' | 'pdf') => {
        const file = selectedFile[fileType];
        if (!file) {
            toast.error(`Please select a ${fileType} first.`);
            return;
        }

        try {
            const response: any = await startUpload([file]);

            if (response && response.length > 0 && response[0]?.url) {
                const url = response[0].url;
                return url;
            } else {
                throw new Error(`No file URL returned for ${fileType}`);
            }
        } catch (error: any) {
            toast.error(error?.message || `Something went wrong uploading ${fileType}`);
            return null;
        }
    };



    const uploadAllFiles = async (type: string) => {
        if (type === 'photo') {
            const photoUrl = await handleUpload('photo');
            return photoUrl;
        }
        if (type === 'pdf') {
            const pdfUrl = await handleUpload('pdf');
            return pdfUrl;
        }
    };

    return {
        selectedFile,
        isUploading,
        handleFileChange,
        uploadAllFiles,
    };
};

export default useFileUpload;

