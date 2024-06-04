import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function DataTablePagination({ table }) {
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-end md:items-center items-start lg:space-x-8 md:space-x-6 space-x-0 pt-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium text-dark">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] text-dark items-center md:justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <FiChevronsLeft className="h-4 w-4 text-dark" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <IoChevronBackOutline className="h-4 w-4 text-dark" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <IoChevronForward className="h-4 w-4 text-dark" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <FiChevronsRight className="h-4 w-4 text-dark" />
        </Button>
      </div>
    </div>
  );
}

DataTablePagination.propTypes = {
  table: PropTypes.string.isRequired,
};
