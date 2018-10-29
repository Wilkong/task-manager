import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './css/Modal.module.css'

//Компонент для вывода модальных окон поверх страницы
class Modal extends Component {
  element = document.createElement('div');

  componentDidMount(){
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return (
      ReactDOM.createPortal(
        <div className={styles.modal}>        
          {this.props.children}
        </div>,
        this.element
      )
    );
  }
}

export default Modal;