import type {MovieDBResponse, Movie} from '../types';

import {useEffect, useState} from 'react';
import {movieDb} from '../api';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRelated: Movie[];
  upcoming: Movie[];
}

const initialState: MovieState = {
  nowPlaying: [],
  popular: [],
  topRelated: [],
  upcoming: [],
};

export default function useMovies() {
  const [movies, setMovies] = useState<MovieState>(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const newPlayingPromise = movieDb.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDb.get<MovieDBResponse>('/popular');
    const topRelatedPromise = movieDb.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDb.get<MovieDBResponse>('/upcoming');

    try {
      const response = await Promise.all([
        newPlayingPromise,
        popularPromise,
        topRelatedPromise,
        upcomingPromise,
      ]);

      console.log(response[0].data.results[0]);

      setMovies({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRelated: response[2].data.results,
        upcoming: response[3].data.results,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    isLoading,
  };
}
