import {
  InputFrom,
  ContainerInputFrom,
  SpanFrom,
} from './FilterMielage.styled';

export const FilterMileageMin = ({ input }) => {
  const handleChangeMin = e => {
    const inputValue = e.target.value === '' ? null : e.target.value;
    input.onChange(inputValue);
  };

  return (
    <ContainerInputFrom>
      <SpanFrom>From</SpanFrom>
      <InputFrom
        type="number"
        name="carMileageMin"
        onChange={handleChangeMin}
      />
    </ContainerInputFrom>
  );
};
