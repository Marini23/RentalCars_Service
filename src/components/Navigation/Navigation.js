import { Header, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favoretes</NavLinkStyled>
    </Header>
  );
};
