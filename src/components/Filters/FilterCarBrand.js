import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarBrand, resetCarBrand } from '../../redux/filterSlice';
import { ContainerSelect, Label } from './FiltersCarBrand.styled';
import { selectAdverts } from '../../redux/selectors';

export const FilterCarBrand = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const rentalMakes = adverts.map(obj => obj.make);

  const makes = rentalMakes.map(make => ({
    value: make,
    label: make,
  }));

  return (
    <ContainerSelect>
      <Label htmlFor="makes">Car brand</Label>
      <Select
        placeholder={'Enter the text'}
        isClearable
        clearable={false}
        isSearchable
        name="makes"
        options={makes}
        onChange={selectedOption => {
          if (selectedOption) {
            dispatch(changeCarBrand(selectedOption.value));
          } else {
            dispatch(resetCarBrand());
          }
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 224,
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
            width: 224,
            height: 272,
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
    </ContainerSelect>
  );
};
