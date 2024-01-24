import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/advertsSlice/advertsOperations';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { FilterCarBrand } from 'components/Filters/FilterCarBrand';
import { CatalogContainer, FilterContainer } from './CatalogPage.styled';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { FilterPriceHour } from 'components/Filters/FilterPriceHour';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <CatalogContainer>
      <FilterContainer>
        <FilterCarBrand />
        <FilterPriceHour />
      </FilterContainer>
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong!</p>}
      {!isLoading && !error && <AdvertsList />}
      <LoadMoreButton />
    </CatalogContainer>
  );
};
