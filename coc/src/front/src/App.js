import { Route, Routes } from 'react-router-dom';
import RegisterPage from './member/RegisterPage';
import Login from './member/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;