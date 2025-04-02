import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  nextPage: number | null;
  prevPage: number | null;
  currentPage: number;
  totalPages: number;
}

export function PaginationControls({ nextPage, prevPage, currentPage, totalPages }: PaginationControlsProps) {
  const showEllipsisStart = currentPage > 2;
  const showEllipsisEnd = currentPage < totalPages - 1;

  return (
    <div className="mt-8">
      <Pagination>
        <PaginationContent>
          {prevPage && (
            <PaginationItem>
              <PaginationPrevious href={`/?page=${prevPage}`} />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink href="/?page=1" isActive={currentPage === 1}>
              1
            </PaginationLink>
          </PaginationItem>

          {showEllipsisStart && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage > 1 && currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink href={`/?page=${currentPage}`} isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {showEllipsisEnd && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {totalPages > 1 && (
            <PaginationItem>
              <PaginationLink 
                href={`/?page=${totalPages}`} 
                isActive={currentPage === totalPages}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {nextPage && (
            <PaginationItem>
              <PaginationNext href={`/?page=${nextPage}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
} 