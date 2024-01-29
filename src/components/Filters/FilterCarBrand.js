import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerSelect, Label } from './FilterCarBrand.styled';
import { selectAdverts } from '../../redux/selectors';
import { resetCarBrand } from '../../redux/filterSlice';

export const FilterCarBrand = ({ input }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const rentalMakes = adverts.map(obj => obj.make);

  const makes = rentalMakes.map(make => ({
    value: make,
    label: make,
  }));

  return (
    <ContainerSelect>
      <Label htmlFor="carBrand">Car brand</Label>
      <Select
        id="carBrand"
        placeholder={'Enter the text'}
        isClearable
        clearable={false}
        isSearchable
        name="carBrand"
        options={makes}
        onChange={selectedOption => {
          const selectedValue = selectedOption ? selectedOption.value : null;
          console.log(selectedValue);
          input.onChange(selectedValue);
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
