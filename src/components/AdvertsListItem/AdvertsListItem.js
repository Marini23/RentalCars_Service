// import { useDispatch } from 'react-redux';

import { AdvertCard, Img } from './AdvertsListItem.styled';

export const AdvertsListItem = ({ advert }) => {
  //   const dispatch = useDispatch();

  const {
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
    id,
  } = advert;

  return (
    <AdvertCard>
      <Img src={img} alt={make} />
      <div>
        <p>
          {make}
          <span>{model}</span>
          {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <p>{address.split(', ').slice(1).join(', ')}</p>
        <p>{rentalCompany}</p>
      </div>
      <div>
        <p>
          {type}
          {make}
          {id}
          {functionalities[0]}
        </p>
      </div>
      <button>Learn more</button>
    </AdvertCard>
  );
};
