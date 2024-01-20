import { useDispatch } from 'react-redux';
import makes from './makes.json';
import { changeCarBrand } from '../../redux/filterSlice';
import { ContainerSelect, Label, Option } from './Filters.styled';

export const FilterCarBrand = () => {
  const dispatch = useDispatch();

  return (
    <ContainerSelect>
      <Label>
        Car brand
        <select
          name="makes"
          defaultValue=""
          onChange={e => dispatch(changeCarBrand(e.target.value))}
        >
          <Option value="" disabled hidden>
            Enter the text
          </Option>
          {makes.map((make, index) => (
            <Option value={make} key={index}>
              {make}
            </Option>
          ))}
        </select>
      </Label>
    </ContainerSelect>
  );
};
