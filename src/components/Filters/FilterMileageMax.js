import { ContainerInputTo, SpanTo, InputTo } from './FilterMielage.styled';

export const FilterMileageMax = ({ input }) => {
  const handleChangeMax = e => {
    const inputValue = e.target.value === '' ? null : e.target.value;
    input.onChange(inputValue);
  };

  return (
    <ContainerInputTo>
      <SpanTo>To</SpanTo>
      <InputTo type="number" name="carMileageMax" onChange={handleChangeMax} />
    </ContainerInputTo>
  );
};
