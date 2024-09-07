import Spinner from "@/components/others/Spinner";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <Spinner />
        </div>
    );
}

export default loading;