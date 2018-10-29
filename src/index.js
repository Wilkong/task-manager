import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TaskManager from './components/common/TaskManager'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { loadState, saveState } from './persistentStore.js'
import rootReducer from './store'
import CreateForm from './components/containers/CreateForm'
import EditForm from './components/containers/EditForm'

const initialState = loadState();

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store = {store}>
    <Router>      
      <React.Fragment>      
        <Route path="/" component={TaskManager} />        
        <Route path="/create" component={CreateForm} />   
        <Route path="/edit/:id" component={EditForm} />         
      </React.Fragment>
    </Router>  
</Provider>, document.getElementById('root'));
