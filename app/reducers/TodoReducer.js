import {bake_cookie, read_cookie} from 'sfcookies';

export default (state=read_cookie('tasksCookie'), action) => {
  let newState = [];
  switch(action.type) {
  case 'SAVE_TASK':
    newState = [...state, action.newTask];
    bake_cookie('tasksCookie', newState);
    return newState;
  case 'DELETE_TASK':
    newState = state.filter( task => {
      return (task !== action.task);
    });
    bake_cookie('tasksCookie', newState);
    return newState;
  default:
    return state;
  }
};
