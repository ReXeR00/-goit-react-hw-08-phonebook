import { Route, Routes } from 'react-router-dom';
import { Register, Login } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={Layout}>
        <Route index element={<Home />} />
        <Route path="/register " element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
