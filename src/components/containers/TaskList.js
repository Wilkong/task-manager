import List from '../common/List'
import { connect } from 'react-redux'
import { task as taskStore } from '../../store/task'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  deleteTask: (event, id) => {
    event.preventDefault();
    return dispatch(taskStore.deleteTask(id)); 
  },
  completeTask: (event, id) => {    
    return dispatch(taskStore.completeTask(id)); 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);