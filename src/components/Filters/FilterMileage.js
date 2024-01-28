import { useDispatch } from 'react-redux';

import {
  changeCarMileageMax,
  changeCarMileageMin,
} from '../../redux/filterSlice';
import {
  ContainerFilterMielage,
  ContainerInputTo,
  ContainerInputs,
  InputFrom,
  Label,
  ContainerInputFrom,
  SpanFrom,
  SpanTo,
  InputTo,
} from './FilterMielage.styled';
// import { selectFilterMielageMin } from '../../redux/selectors';

export const FilterMileage = () => {
  const dispatch = useDispatch();

  // const mielageMin = useSelector(selectFilterMielageMin);

  const handleChangeMin = e => {
    const inputValue = e.target.value;
    dispatch(changeCarMileageMin(inputValue));
  };

  const handleChangeMax = e => {
    const inputValue = e.target.value;

    dispatch(changeCarMileageMax(inputValue));
  };

  const handleKeyDownMin = e => {
    const isNumericKey = /^\d$/.test(e.key);
    if (e.key === 'Backspace') {
      const inputValue = e.target.value;
      const newValue = inputValue.slice(0, -1);
      dispatch(changeCarMileageMin(newValue));
    } else if (!isNumericKey) {
      e.preventDefault();
      alert('Please enter a valid number.');
    }
  };

  const handleKeyDownMax = e => {
    const isNumericKey = /^\d$/.test(e.key);
    if (e.key === 'Backspace') {
      const inputValue = e.target.value;
      const newValue = inputValue.slice(0, -1);
      dispatch(changeCarMileageMax(newValue));
    } else if (!isNumericKey) {
      e.preventDefault();
      alert('Please enter a valid number.');
    }
  };

  return (
    <>
      <ContainerFilterMielage>
        <Label htmlFor="mielage">Car mielage / km</Label>
        <ContainerInputs>
          <ContainerInputFrom>
            <SpanFrom>From</SpanFrom>
            <InputFrom
              type="number"
              name="mielageMin"
              onChange={handleChangeMin}
              onKeyDown={handleKeyDownMin}
            />
          </ContainerInputFrom>
          <ContainerInputTo htmlFor="mielageMax">
            <SpanTo>To</SpanTo>
            <InputTo
              type="number"
              name="mielageMax"
              onChange={handleChangeMax}
              onKeyDown={handleKeyDownMax}
            />
          </ContainerInputTo>
        </ContainerInputs>
      </ContainerFilterMielage>
    </>
  );
};
