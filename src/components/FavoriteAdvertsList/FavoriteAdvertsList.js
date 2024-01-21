import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import {
  CarsList,
  EmptyFavoritesMessage,
  FavoritesContainer,
} from './FavoriAdvertsList.styled';
import { FilterCarBrand } from 'components/Filters/FilterCarBrand';

export const FavoriteAdvertsList = () => {
  const favoritesAdverts = useSelector(selectFavorites);
  return (
    <FavoritesContainer>
      <FilterCarBrand />
      {favoritesAdverts.length === 0 ? (
        <EmptyFavoritesMessage>
          Your favorites list is empty.
        </EmptyFavoritesMessage>
      ) : (
        <CarsList>
          {favoritesAdverts.map(advert => (
            <AdvertsListItem advert={advert} key={advert.id} />
          ))}
        </CarsList>
      )}
    </FavoritesContainer>
  );
};
