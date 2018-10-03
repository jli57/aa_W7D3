import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducers = combineReducers({
  pokemon: pokemonReducer,
});

export default entitiesReducers;
