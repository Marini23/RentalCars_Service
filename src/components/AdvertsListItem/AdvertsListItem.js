// import { useDispatch } from 'react-redux';

import { FaRegHeart } from 'react-icons/fa6';

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
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { Modal } from 'components/Modal/Modal';
import { AdvertInfoDetails } from 'components/AdvertInfoDetails/AdvertInfoDetails';

export const AdvertsListItem = ({ advert }) => {
  //   const dispatch = useDispatch();
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
    console.log('modal');
    setIsModalOpen(state => !state);
    if (!isModalOpen) {
      const selectCar = adverts.find(car => car.id === id);
      setSelectedAdvert(selectCar);
    } else {
      setSelectedAdvert(null);
    }
  };
  return (
    <>
      <AdvertCard>
        <Img src={img} alt={make} />
        <FaRegHeart
          style={{
            position: 'absolute',
            top: '14px',
            left: '242px',
          }}
          size="18px"
          color="white"
          // onClick={handleClick}
        />
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
