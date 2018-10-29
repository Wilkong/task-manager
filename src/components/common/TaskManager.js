import React, { Component } from 'react'
import TaskListHeader from './TaskListHeader'
import TaskList from '../containers/TaskList'
import styles from './css/TaskManager.module.css'

class TaskManager extends Component {
  state = {
    hideDone: true
  }
  
  handleDone = (event) => {
    let input = event.target;
    this.setState( (state)  => ({ hideDone: input.checked }) );
  }

  render() {
    return (      
      <div className={styles.TaskManager}>        
        <TaskListHeader hideDone={ this.handleDone } isHidden={ this.state.hideDone }/>          
        <TaskList hideDone={ this.state.hideDone }/> 
      </div>                  
  )}
};

export default TaskManager;
