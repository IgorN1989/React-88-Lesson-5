import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { getUserInfo } from "./sevices/API";
import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/thunk";
import { setBaseCurrency } from "./redux/slice";
const HomePage = lazy(() => import("./pages/Home"));
const RatesPage = lazy(() => import("./pages/Rates"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(baseCurrencyThunk(crd));
    }

    function error(err) {
      dispatch(setBaseCurrency("USD"));

      console.warn(`ERROR ${err.code}: ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
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
