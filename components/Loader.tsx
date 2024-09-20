
const Loader = () => {
    return (
        <div className="fixed transition-all z-50 top-0 left-0 bg-white dark:bg-black w-full h-screen flex items-center justify-center">
            <div className="flex items-center justify-center bg-blue-300 rounded-full h-24 w-24 animate-pulse dark:text-black">
                Loading
            </div>
        </div>
    )
}

export default Loader