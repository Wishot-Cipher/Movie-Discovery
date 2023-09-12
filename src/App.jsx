import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
};


export default App;
