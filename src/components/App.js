import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<div>Homepage</div>} />
          <Route path="/catalog" element={<div>Catalog</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
    </div>
  );
};
