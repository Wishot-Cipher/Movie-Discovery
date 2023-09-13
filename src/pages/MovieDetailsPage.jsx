import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';
import MovieDetails from '../components/MovieDetails';
import Spinner from '../components/Spinner';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/movie/${id}`, {
          params: {
            api_key: '14e6772572173a61fc985a3f2094ea07',
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="  p-0">
      {movieDetails ? (
        <MovieDetails
          title={movieDetails.title}
          releaseDate={movieDetails.release_date}
          runtime={movieDetails.runtime}
          overview={movieDetails.overview}
          backdropPath={movieDetails.backdrop_path}
          voteAverage={movieDetails.vote_average}
        />
      ) : (
        <div className="loader-container">
        <div className="loader"> <Spinner /> </div>
      </div>
      
      )}
    </div>
  );
};

export default MovieDetailsPage;
