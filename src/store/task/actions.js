import { actionTypes as task } from './actionTypes'

export const addTask = ( name, date ) => ({  
    type: task.ADD,
    payload: {      
      name,
      date
    }  
});

export const deleteTask = ( id ) => ({  
    type: task.DELETE,
    payload: {
      id
    }  
});

export const editTask = ( id, name, date ) => ({  
    type: task.EDIT,
    payload: {
      id,
      name,
      date
    }    
});

export const completeTask = ( id ) => ({  
    type: task.COMPLETE,
    payload: {
      id
    }  
});


