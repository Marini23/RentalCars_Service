import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
