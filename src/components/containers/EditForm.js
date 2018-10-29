import React, { Component } from 'react'
import { connect } from 'react-redux'
import { task as taskStore } from '../../store/task'
import Form from '../common/Form'
import Modal from '../hoc/Modal'
import PropTypes from 'prop-types'

class EditForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask( this.props.id, event.target.taskName.value, event.target.taskDate.value );
    this.props.history.push('/');    
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/'); 
  }

  render() {
    return (  
      <Modal>      
      <Form name={this.props.name}
            date={this.props.date}
            operation="Изменить"
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}/>      
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentTask = state.tasks.filter( task => task.id === Number.parseInt(ownProps.match.params.id, 10 ))[0];
  return {
    name: currentTask.name,
    date: currentTask.date,
    id: ownProps.match.params.id
}};

EditForm.propTypes = {
  id: PropTypes.string.isRequired,  
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { editTask: taskStore.editTask })(EditForm);