import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundPage from "./pages/NotFoundPage"; // Import your 404 page component
import Footer from "./components/Footer";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> 
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* This is the 404 route */}
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
