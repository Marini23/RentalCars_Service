import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../redux/advertsSlice/advertsOperations';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return <AdvertsList />;
};
