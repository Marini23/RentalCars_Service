import {
  BlockTitle,
  Button,
  ContainerBlock,
  ContainerConditions,
  Img,
  Link,
  Model,
  TextConditions,
  TextDescription,
  TextInfo,
  TextSpan,
  Title,
} from './AdvertInfoDetails.styled';

import { IoCloseOutline } from 'react-icons/io5';

export const AdvertInfoDetails = ({ selectedAdvert, isClose }) => {
  console.log(selectedAdvert);
  const {
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    address,
    accessories,
    functionalities,
    id,
    description,
    fuelConsumption,
    engineSize,
    rentalConditions,
    mileage,
  } = selectedAdvert;

  const rentalConditionsArray = rentalConditions.split('\n');

  const handleClick = () => {
    isClose();
  };
  return (
    <>
      <IoCloseOutline
        style={{
          position: 'absolute',
          top: '16px',
          left: '501px',
        }}
        size="24px"
        color="black"
        onClick={handleClick}
      />
      <Img src={img} alt={make} />
      <ContainerBlock>
        <Title>
          {make}
          <Model>{model}</Model>, {year}
        </Title>
        <TextInfo>
          {address.split(', ').slice(1).join(' | ')} | id:{id} | year:{year} |
          type: {type}
        </TextInfo>
        <TextInfo>
          FuelConsumption:{fuelConsumption} | EngineSize:{engineSize}
        </TextInfo>
      </ContainerBlock>
      <TextDescription>{description}</TextDescription>
      <ContainerBlock>
        <BlockTitle>Accessories and functionalities:</BlockTitle>
        <TextInfo>{accessories.join(' | ')}</TextInfo>
        <TextInfo>{functionalities.join(' | ')}</TextInfo>
      </ContainerBlock>
      <ContainerBlock>
        <BlockTitle>Rental conditions:</BlockTitle>
        <ContainerConditions>
          <TextConditions>{rentalConditionsArray[0]}</TextConditions>
          <TextConditions>{rentalConditionsArray[1]}</TextConditions>
        </ContainerConditions>
        <ContainerConditions>
          <TextConditions>{rentalConditionsArray[2]}</TextConditions>
          <TextConditions>
            Mileage:<TextSpan>{mileage.toLocaleString()}</TextSpan>
          </TextConditions>
          <TextConditions>
            Price: <TextSpan>{rentalPrice}</TextSpan>
          </TextConditions>
        </ContainerConditions>
      </ContainerBlock>
      <Button>
        <Link href={`tel:+380730000000`}>Rental car</Link>
      </Button>
    </>
  );
};
