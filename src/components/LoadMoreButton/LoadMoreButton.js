import { useEffect, useState } from 'react';
import { Button } from './LoadMoreButton.styled';
import { useDispatch } from 'react-redux';
import { loadMoreAdverts } from '../../redux/advertsSlice/advertsOperations';

export const LoadMoreButton = ({ onClick }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(loadMoreAdverts(currentPage));
    }
  }, [dispatch, currentPage]);

  return (
    <Button type="button" onClick={handleLoadMore}>
      Load more
    </Button>
  );
};
