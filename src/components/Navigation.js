import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/catalog">
        <div>Catalog</div>
      </Link>
      <Link to="/favorites">
        <div>Favoretes</div>
      </Link>
    </nav>
  );
};
