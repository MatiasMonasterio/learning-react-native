import type {MovieFull, CreditResponse, Cast} from '../types';
import {useState, useEffect} from 'react';

import {movieDb} from '../api';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export default function useMovieDetails(movieId: number) {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDb.get<MovieFull>(`/${movieId}`);
    const movieCreditsPromise = await movieDb.get<CreditResponse>(
      `/${movieId}/credits`,
    );

    const [details, credits] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: details.data,
      cast: credits.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
}
