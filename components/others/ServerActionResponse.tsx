import { toast } from "sonner";
import { useEffect } from "react";

export function DisplayServerActionResponse({ result }: any) {
    const { data, serverError, validationErrors } = result;

    useEffect(() => {
        if (data?.message) {
            toast.success(data.message);
        }

        if (serverError) {
            toast.error(serverError);
        }

        if (validationErrors) {
            toast.error("Invalid data")
        }
    }, [data, serverError, validationErrors]);

    return null;
}