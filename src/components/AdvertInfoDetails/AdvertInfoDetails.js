import {
  BlockTitle,
  Button,
  ContainerBlock,
  ContainerConditions,
  Img,
  Model,
  TextConditions,
  TextDescription,
  TextInfo,
  TextSpan,
  Title,
} from './AdvertInfoDetails.styled';

export const AdvertInfoDetails = ({ selectedAdvert }) => {
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
  return (
    <>
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

      <Button>Rental car</Button>
    </>
  );
};
