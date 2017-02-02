import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
  tasks: TodoReducer
});

export default rootReducer;
