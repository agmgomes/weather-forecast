import { FETCH_WEATHER, WEATHER_LOADING, FAIL_WEATHER } from '../actions/types';

const initialSate = {
  weather: [],
  loading: false,
  fetched: false
};

export default function(state = initialSate, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false,
        fetched: true
      };
    case FAIL_WEATHER:
      return {
        ...state,
        loading: false,
        fetched: false
      };
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
