import { Link } from 'react-router-dom';
import { Header, Text } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/catalog">
        <Text>Catalog</Text>
      </Link>
      <Link to="/favorites">
        <Text>Favoretes</Text>
      </Link>
    </Header>
  );
};
