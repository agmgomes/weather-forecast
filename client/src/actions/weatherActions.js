import axios from 'axios';
import { FETCH_WEATHER, WEATHER_LOADING } from './types';
import { returnErrors } from './errorActions';

export const fetchWeather = city => dispatch => {
  axios
    .get(`/weather/cities/${city}`)
    .then(res =>
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  };
};
