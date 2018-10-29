import { actionTypes as task } from './actionTypes'

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case task.ADD:  
      let nextId, newDate;
      try {
        nextId = Math.max( ...state.map((task) => task.id ), 0 ) + 1;
        newDate = action.payload.date;
      } catch (err) {
        //TODO: logging
        return state;
      }      
      return [
        ...state,
        {
          id: nextId,
          name: action.payload.name,
          date: newDate,
          done: false
        }
      ];
    case task.EDIT:
      return taskEdit(state, action);
    case task.DELETE:
      return state.filter((task) => task.id !== action.payload.id );
    case task.COMPLETE:  
      return completeTask(state, action);
    default:
      return state;
  }
}

export default taskReducer;

const taskEdit = (state, action) => {
  const id = Number.parseInt(action.payload.id);
  const taskIndex = state.findIndex((task) => task.id === id );
  const newState = [...state];

  newState[taskIndex] = {
    ...state[taskIndex],    
    name: action.payload.name,
    date: action.payload.date    
  };
  return newState;
}

const completeTask = (state, action) => {
  const id = Number.parseInt(action.payload.id);
  const taskIndex = state.findIndex((task) => task.id === id );
  const newState = [...state];

  newState[taskIndex] = {
    ...state[taskIndex],    
    done: !state[taskIndex].done
  };

  return newState;

}