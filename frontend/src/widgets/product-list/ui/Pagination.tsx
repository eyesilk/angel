import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import { useUrlPaginate } from '../lib/useUrlPaginate';

interface PaginationProps {
  totalPages: number;
}

interface PaginateEvent {
  selected: number;
}

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const { searchParams, handleUrlPaginate } = useUrlPaginate();

  const setNewPage = (event: PaginateEvent): void => {
    handleUrlPaginate('page', (event.selected + 1).toString());

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setNewPage(e)}
      pageRangeDisplayed={2}
      pageCount={totalPages / 10}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={Number(searchParams.get('page')) - 1}
    />
  );
};
