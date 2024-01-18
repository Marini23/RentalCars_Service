import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul>
      {adverts.map(advert => (
        <AdvertsListItem advert={advert} key={advert.id} />
      ))}
    </ul>
  );
};
