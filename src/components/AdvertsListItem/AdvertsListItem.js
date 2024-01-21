import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

import {
  AdvertCard,
  Button,
  Container,
  Img,
  Info,
  InfoContainer,
  Location,
  LocationContainer,
  Model,
  Title,
  TitleContainer,
} from './AdvertsListItem.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { Modal } from 'components/Modal/Modal';
import { AdvertInfoDetails } from 'components/AdvertInfoDetails/AdvertInfoDetails';
import { addFavorites, deleteFavorites } from '../../redux/favoritesSlice';

export const AdvertsListItem = ({ advert }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const {
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    id,
  } = advert;

  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(state => !state);
    if (!isModalOpen) {
      const selectCar = adverts.find(car => car.id === id);
      setSelectedAdvert(selectCar);
    } else {
      setSelectedAdvert(null);
    }
  };

  const isFavorite = useSelector(state =>
    state.favorites.favoritesItems.some(favorite => favorite.id === id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(advert));
    } else {
      dispatch(addFavorites(advert));
    }
  };

  return (
    <>
      <AdvertCard>
        <Img src={img} alt={make} />
        {isFavorite ? (
          <FaHeart
            style={{
              corsor: 'pointer',
              position: 'absolute',
              top: '14px',
              left: '242px',
              color: `#3470FF`,
            }}
            size="18px"
            onClick={toggleFavorite}
          />
        ) : (
          <FaRegHeart
            style={{
              corsor: 'pointer',
              position: 'absolute',
              top: '14px',
              left: '242px',
              color: 'white',
            }}
            size="18px"
            onClick={toggleFavorite}
          />
        )}
        <Container>
          <TitleContainer>
            <Title>
              {make}
              <Model>{model},</Model>
              {year}
            </Title>
            <p>{rentalPrice}</p>
          </TitleContainer>
          <LocationContainer>
            <Location>{address.split(', ').slice(1).join(' | ')}</Location>
            <Location> | {rentalCompany}</Location>
          </LocationContainer>
          <InfoContainer>
            <Info>
              {type} | {make} | {id} | {accessories[1]}
            </Info>
          </InfoContainer>
        </Container>
        <Button onClick={toggleModal}>Learn more</Button>
      </AdvertCard>
      {isModalOpen && (
        <Modal isClose={toggleModal} isOpen={isModalOpen}>
          <AdvertInfoDetails
            selectedAdvert={selectedAdvert}
            isClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
