import axios from 'axios';
import { FETCH_WEATHER, WEATHER_LOADING, FAIL_WEATHER } from './types';
import { returnErrors } from './errorActions';

export const fetchWeather = city => dispatch => {
  dispatch(setWeatherLoading());

  axios
    .get(`/weather/cities/${city}`)
    .then(res =>
      dispatch({
        type: FETCH_WEATHER,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(setWeatherFailed());
    });
};

export const setWeatherLoading = () => {
  return {
    type: WEATHER_LOADING
  };
};

export const setWeatherFailed = () => {
  return {
    type: FAIL_WEATHER
  };
};
