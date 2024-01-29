import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/advertsSlice/advertsOperations';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { CatalogContainer } from './CatalogPage.styled';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { Loader } from 'components/Loader/Loader';

import { FilterSearchBar } from 'components/Filters/FilterSearchBar';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <CatalogContainer>
      <FilterSearchBar />
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      {!isLoading && !error && <AdvertsList />}
      <LoadMoreButton />
    </CatalogContainer>
  );
};
