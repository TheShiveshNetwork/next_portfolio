import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";


type PaginationControllerProps = {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
};

export function PaginationController({ totalPages, currentPage, setCurrentPage }: PaginationControllerProps) {

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4">
                        <Button
                            onClick={prevPage}
                            disabled={currentPage === 0}
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden md:block">Previous</span>
                        </Button>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">
                                Page {currentPage + 1} of {totalPages}
                            </span>
                        </div>

                        <Button
                            onClick={nextPage}
                            disabled={currentPage === totalPages - 1}
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                        >
                            <span className="hidden md:block">Next</span>
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                )
}