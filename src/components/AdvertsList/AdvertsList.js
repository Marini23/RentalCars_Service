import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';
import { useSelector } from 'react-redux';
import { selectVisibleAdverts } from '../../redux/selectors';
import { CarsList } from './AdvertsList.styled';

export const AdvertsList = () => {
  const adverts = useSelector(selectVisibleAdverts);
  return (
    <div>
      <CarsList>
        {adverts.map(advert => (
          <AdvertsListItem advert={advert} key={advert.id} />
        ))}
      </CarsList>
    </div>
  );
};
