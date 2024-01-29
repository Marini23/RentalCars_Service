import {
  BtnReset,
  BtnSearch,
  ContainerFilterMielage,
  ContainerInputs,
  FormContainer,
  Label,
} from './FilterSearchBar.styled';
import { Field, Form } from 'react-final-form';
import { FilterCarBrand } from './FilterCarBrand';
import { FilterPriceHour } from './FilterPriceHour';
import { FilterMileageMin } from './FilterMileageMin';
import { FilterMileageMax } from './FilterMileageMax';
import { useDispatch } from 'react-redux';
import { changeFilter, resetFilter } from '../../redux/filterSlice';

export const FilterSearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);
    dispatch(changeFilter(values));
  };

  const handleReset = e => {
    dispatch(resetFilter());
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Field
            name="carBrand"
            component={FilterCarBrand}
            render={({ input }) => <FilterCarBrand input={input} />}
          />
          <Field
            name="priceHour"
            component={FilterPriceHour}
            render={({ input }) => <FilterPriceHour input={input} />}
          />
          <ContainerFilterMielage>
            <Label>Car mielage / km</Label>
            <ContainerInputs>
              <Field
                name="carMileageMin"
                component={FilterMileageMin}
                // Pass the form's input prop to the component
                render={({ input }) => <FilterMileageMin input={input} />}
              />
              <Field
                name="carMileageMax"
                component={FilterMileageMax}
                // Pass the form's input prop to the component
                render={({ input }) => <FilterMileageMax input={input} />}
              />
            </ContainerInputs>
          </ContainerFilterMielage>

          <BtnSearch type="submit" onClick={() => form.submit()}>
            Search
          </BtnSearch>
          <BtnReset type="button" onClick={handleReset}>
            Reset
          </BtnReset>
        </FormContainer>
      )}
    />
  );
};
