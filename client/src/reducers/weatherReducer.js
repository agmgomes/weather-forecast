import { FETCH_WEATHER, WEATHER_LOADING } from '../actions/types';

const initialSate = {
  weather: [],
  loading: false
};

export default function(state = initialSate, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload
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
