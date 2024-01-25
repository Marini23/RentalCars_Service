import { useDispatch } from 'react-redux';
import { Label } from './FiltersCarBrand.styled';
import {
  changeCarMileageMax,
  changeCarMileageMin,
} from '../../redux/filterSlice';

export const FilterMileage = () => {
  const dispatch = useDispatch();

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
    <div>
      <Label htmlFor="mielage">Car mielage / km</Label>
      <label htmlFor="mielageMin">
        <span>From</span>
        <input
          type="number"
          name="mielageMin"
          onChange={handleChangeMin}
          onKeyDown={handleKeyDownMin}
        />
      </label>
      <label htmlFor="mielageMax">
        <span>To</span>
        <input
          type="number"
          name="mielageMax"
          onChange={handleChangeMax}
          onKeyDown={handleKeyDownMax}
        />
      </label>
    </div>
  );
};
