import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';
import { CatalogPage } from 'pages/CatalogPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<div>Homepage</div>} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
    </div>
  );
};
