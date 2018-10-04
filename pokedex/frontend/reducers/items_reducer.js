import {RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';


const itemsReducer = (state = {},action) =>{
  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      let newState = merge({}, state , action.payload.items);
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
