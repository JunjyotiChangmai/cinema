import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import HomePage from './pages/homePage/HomePage';
import SearchPage from './pages/searchPage/SearchPage';
import MovieDetailsPage from './pages/movieDetailsPage/MovieDetailsPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import { FavoritesProvider } from './context/FavoritesContext';

const App = () => (
  <FavoritesProvider>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  </FavoritesProvider>
);

export default App;
