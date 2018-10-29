import React from 'react'
import { withRouter } from 'react-router'
import styles from './css/Header.module.css'
import Checkbox from './Checkbox';
import PropTypes from 'prop-types'

const header = ({ hideDone, isHidden, history }) => (
    <header className={styles.header}>
      <button 
        className={styles.header__createButton}
        onClick={ () => history.push('/create') }>
        <i className="fa fa-plus-circle" ></i> Создать задачу
      </button>
      <p className={ styles.header__checkbox }>
        
      <Checkbox handleChange={ hideDone }
                defaultChecked={ isHidden }
                text="Скрыть выполненные"/>    
      </p>
    </header>
);

header.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  hideDone: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(header);