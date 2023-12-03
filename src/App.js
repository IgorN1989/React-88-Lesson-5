import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { getUserInfo } from './sevices/API';

const HomePage = lazy(() => import('./pages/Home'));
const RatesPage = lazy(() => import('./pages/Rates'));

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      getUserInfo(lat, long);
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
