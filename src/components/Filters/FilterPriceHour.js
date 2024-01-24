import Select from 'react-select';
import { Label } from './FiltersCarBrand.styled';

const priceOptions = [
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 30,
    label: 30,
  },
];

export const FilterPriceHour = () => {
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
        }}
      />
    </div>
  );
};
