import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

import { FilterCarBrand } from 'components/Filters/FilterCarBrand';
import { CarsList } from './FavoriAdvertsList.styled';

export const FavoriteAdvertsList = () => {
  const favoritesAdverts = useSelector(selectFavorites);
  return (
    <div>
      <FilterCarBrand />
      <CarsList>
        {favoritesAdverts.map(advert => (
          <AdvertsListItem advert={advert} key={advert.id} />
        ))}
      </CarsList>
    </div>
  );
};
