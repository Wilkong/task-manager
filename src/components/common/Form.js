import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './css/Form.module.css'


class Form extends Component {
    state = {
      name: (this.props.name || '')
    }

    render() {
      return (        
        <section className={styles.task}>
          <div className={styles.header}>
            <h4 className={styles.header__title}>Задача</h4>
            <div className={styles.header__closeButton} onClick={ this.props.handleCancel }>&times;</div>              
          </div>
          
            <form onSubmit = { this.props.handleSubmit } id="taskForm" className={styles.form}>               
                <ul className={styles.form__content}>
                  <li>                    
                    <label className={styles.content__label}>Имя</label>
                    <input type="text" required 
                          className={styles.content__input}
                          name="taskName" 
                          defaultValue={ this.state.name }                   
                          />    
                  </li>
                  <li>                    
                    <label className={styles.content__label}>Дедлайн</label>  
                      <input type="date" 
                            lang="ru"
                            className={styles.content__input} 
                            defaultValue={this.props.date}
                            name="taskDate" 
                            required={true} 
                            onKeyDown={(event) => event.preventDefault()}/>
                  </li>
                </ul>

              <div className={styles.form__footer}>            
                <div className={styles.footer__buttonGroup}>                            
                  <button className={styles.footer__button} type="submit">{ this.props.operation }</button>          
                  <button className={styles.footer__button} onClick={ this.props.handleCancel }>Отменить</button>
                </div>
              </div>                                
            </form>             
        </section>
      );
    }
  }

Form.propTypes = {
    name: PropTypes.string,
    operation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};

export default (Form);