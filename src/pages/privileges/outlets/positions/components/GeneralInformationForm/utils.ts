import { useState, useMemo } from "react";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
const usePagination = (
  searchPosition: string,
  data: IBusinessUnitsPortalStaffId[],
  pagerecord: number
) => {
  const pageLength = pagerecord;
  const [currentPage, setCurrentPage] = useState(0);
  const totalRecords = Array.isArray(data) ? data.length : 0;
  const totalPages = Math.ceil(totalRecords / pageLength);

  const handleStartPage = () => setCurrentPage(0);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const handleEndPage = () => setCurrentPage(totalPages - 1);

  const firstEntryInPage = currentPage * pageLength;
  const lastEntryInPage = Math.min(firstEntryInPage + pageLength, totalRecords);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      console.warn("Data is not an array:", data);
      return [];
    }
    return data.filter((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchPosition.toLowerCase())
      );
    });
  }, [data, searchPosition]);

  const paginatedData = useMemo(() => {
    return filteredData.slice(firstEntryInPage, lastEntryInPage);
  }, [filteredData, firstEntryInPage, lastEntryInPage]);

  return {
    currentPage,
    filteredData,
    totalPages,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  };
};

export { usePagination };
