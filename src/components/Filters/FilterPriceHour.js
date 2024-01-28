import Select from 'react-select';
import { changePriceHour, resetPriceHour } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { Label } from './FilterPriseHour.styled';

export const FilterPriceHour = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const rentalPrices = adverts.map(obj =>
    Number(obj.rentalPrice.replace('$', ''))
  );

  const minPrice = Math.min(...rentalPrices);
  const maxPrice = Math.max(...rentalPrices);
  const step = 10;

  const priceOptions = Array.from(
    { length: Math.floor((maxPrice - minPrice) / step) + 1 },
    (_, index) => ({
      value: minPrice + index * step,
      label: minPrice + index * step,
    })
  );

  return (
    <div>
      <Label htmlFor="price">Price/ 1 hour</Label>
      <Select
        placeholder={'To $'}
        isClearable
        clearable={false}
        isSearchable
        name="price"
        options={priceOptions}
        onChange={selectedOption => {
          if (selectedOption) {
            dispatch(changePriceHour(selectedOption.value));
          } else {
            dispatch(resetPriceHour());
          }
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 125,
            height: 48,
            borderRadius: 14,
            backgroundColor: '#F7F7FB',
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.25,
            color: '#121417',
            border: state.isSelected ? 'none' : 'none',
            borderColor: state.isFocused
              ? 'transparent'
              : baseStyles.borderColor,
            boxShadow: state.isFocused ? 'none' : baseStyles.boxShadow,
          }),
          menu: baseStyles => ({
            ...baseStyles,
            width: 125,
            height: 188,
            borderRadius: 14,
            color: 'rgba(18, 20, 23, 0.2)',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.25,
            backgroundColor: '#FFFFFF',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            fontWeight: 500,
            color: state.isSelected
              ? 'rgba(18, 20, 23, 0.2)'
              : 'rgba(18, 20, 23, 0.2)',
            backgroundColor: state.isFocused ? '#FFFFFF' : '#FFFFFF',
            ':hover': {
              backgroundColor: '#FFFFFF',
              color: '#121417',
            },
          }),
        }}
      />
    </div>
  );
};
