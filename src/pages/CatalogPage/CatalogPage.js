import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/advertsSlice/advertsOperations';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { FilterCarBrand } from 'components/Filters/FilterCarBrand';
import { CatalogContainer } from './CatalogPage.styled';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <CatalogContainer>
      <FilterCarBrand />
      <AdvertsList />
      <LoadMoreButton />
    </CatalogContainer>
  );
};
