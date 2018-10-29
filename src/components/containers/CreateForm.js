import React, { Component } from 'react'
import { connect } from 'react-redux'
import { task as taskStore } from '../../store/task'
import Form from '../common/Form'
import Modal from '../hoc/Modal'

class CreateForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask( event.target.taskName.value, event.target.taskDate.value );
    this.props.history.push('/');    
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/'); 
  }

  render() {
    return (
      <Modal>        
        <Form date={new Date().toISOString().substr(0,10)}
              operation="Сохранить"
              handleSubmit={this.handleSubmit}
              handleCancel={this.handleCancel}/>                      
      </Modal>
    );
  }
}

export default connect(null, { createTask: taskStore.addTask })(CreateForm);
