import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';
import { useSelector } from 'react-redux';
import { selectVisibleAdverts } from '../../redux/selectors';
import { CarsList } from './AdvertsList.styled';
import { FilterCarBrand } from 'components/Filters/FilterCarBrand';

export const AdvertsList = () => {
  const adverts = useSelector(selectVisibleAdverts);
  return (
    <div>
      <FilterCarBrand />
      <CarsList>
        {adverts.map(advert => (
          <AdvertsListItem advert={advert} key={advert.id} />
        ))}
      </CarsList>
    </div>
  );
};
