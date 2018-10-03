import {combineReducers} from 'redux';
import entitiesReducers from './entitiesReducers';

const rootReducer = combineReducers({
  entities: entitiesReducers
});

export default rootReducer;
