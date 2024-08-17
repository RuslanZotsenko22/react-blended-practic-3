import { Navigate, Route, Routes } from 'react-router-dom';
import { Header, Loader } from './components';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home'));
const Country = lazy(() => import('pages/Country'));
const SearchCountry = lazy(() => import('pages/SearchCountry'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
