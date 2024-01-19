import { Img } from './AdvertInfoDetails.styled';

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
    <div>
      <Img src={img} alt={make} />
      <div>
        <h3>
          {make}
          <span>{model}</span>,{year}
        </h3>
        <div>
          <p>{address.split(', ').slice(1).join(' | ')}</p>
          <p>| id:{id}</p>
          <p>| year:{year}</p>
          <p>| type: {type}</p>
          <p>
            FuelConsumption:{fuelConsumption} | EngineSize:{engineSize}
          </p>
        </div>
        <p>{description}</p>
        <div>
          <h4>Accessories and functionalities:</h4>
          <p>{accessories.join(' | ')}</p>
          <p>{functionalities.join(' | ')}</p>
        </div>
        <div>
          <h4>Rental conditions:</h4>
          <div>
            <p>{rentalConditionsArray[0]}</p>
            <p>{rentalConditionsArray[1]}</p>
          </div>
          <div>
            <p>{rentalConditionsArray[2]}</p>
            <p>
              Mileage:<span>{mileage.toLocaleString()}</span>
            </p>
            <p>
              Price: <span>{rentalPrice}</span>
            </p>
          </div>
        </div>
      </div>
      <button>Rental car</button>
    </div>
  );
};
