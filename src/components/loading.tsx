import { Loader } from "./common/loader";

export function LoadingPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader />
        </div>
    );
}
