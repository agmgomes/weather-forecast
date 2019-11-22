import axios from 'axios';
import { FETCH_WEATHER, WEATHER_LOADING } from './types';

export const fetchWeather = city => dispatch => {
  axios
    .get(`/wheater/${city}`)
    .then(res =>
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  };
};
