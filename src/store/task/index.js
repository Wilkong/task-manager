import { actionTypes } from './actionTypes'
import * as actions from  './actions'
import taskReducer from './reducers'

export default taskReducer;

export const task = {
  actionTypes,
  ...actions,
  taskReducer
};