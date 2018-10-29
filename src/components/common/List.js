import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styles from './css/List.module.css'
import Checkbox from './Checkbox'
import PropTypes from 'prop-types'

//для обертки ресайза окна
const throttle = (func, limit) => {
  let lastID;
  let lastCall;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastCall) {
        func.apply(context, args);
        lastCall = Date.now();
      } else {
        clearTimeout(lastID);
        lastID = setTimeout(function() {
          if ((Date.now() - lastCall) >= limit) {
            func.apply(context, args);
            lastCall = Date.now();
          }
        }, limit - (Date.now() - lastCall))
      }
    }
}

class List extends Component {
  state = {
    isMobile: false
  }  

  handleResize = () => {
    return throttle(() => {
      this.setState( state => ({ isMobile: window.innerWidth <= 414 }) )
    }, 200);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize());
    this.setState( state => ({ isMobile: window.innerWidth <= 414 }) )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  render() {
//Для нормального вида на мобильных устройствах меняем структуру вывода с задачами на маленьких экранах, с таблицы на список      
    let component;
    if(this.state.isMobile) {          
      component = tasksList(this.props.tasks, this.props.deleteTask, this.props.completeTask, this.props.hideDone);
    } else {      
      component = tasksTable(this.props.tasks, this.props.deleteTask, this.props.completeTask, this.props.hideDone);
    }
    return component;
  }
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })),
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  hideDone: PropTypes.bool.isRequired
}

const visibleTasks = (tasks, hideDone) => tasks
                                            .filter((task) => { 
                                              if(hideDone) {
                                                return !task.done;  
                                              } 
                                              return true;            
                                            });

const tasksList = ( tasks, deleteTask, completeTask, hideDone) => (
  <ul className={ styles.list }>
      { visibleTasks(tasks, hideDone)
          .map((task) => (
            <li key={task.id} className={ styles.list__item }>   

              <Checkbox handleChange={ (event) => completeTask(event, task.id) }
                        defaultChecked={ task.done } />   

              <p className={ styles.list__name }>
                <span>{task.name}</span>
                <br/>
                <span className={ styles.list__date }>{new Date(task.date).toLocaleDateString()}</span>
              </p>              

              <p className={ styles.list__edit }>         
               <Link to={`/edit/${task.id}`}><i className="fa fa-edit"></i></Link>              
              </p>
              <a href="#" onClick={ (event) => deleteTask(event, task.id) } className={ styles.list__delete } ><i className="fa fa-trash"></i></a>               
            </li>
          ))
      }
  </ul>  
)

const tasksTable = ( tasks, deleteTask, completeTask, hideDone ) => (
  <table className={styles.table}>
    <thead className={styles.table__header}>
      <tr>
        <th>ID</th>
        <th>Задача</th>
        <th>Дата</th>
        <th>Выполнено</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody className={styles.table__body}>
      { tasksBody(tasks, deleteTask, completeTask, hideDone) }
    </tbody>
  </table>   
)

const tasksBody = (tasks, deleteTask, completeTask, hideDone) => 
        visibleTasks(tasks, hideDone)
          .map((task) => (
            <tr key={task.id}>
              <td className={styles.idColumn}>{task.id}</td>
              <td className={styles.nameColumn}>{task.name}</td>
              <td className={styles.dateColumn}>{new Date(task.date).toLocaleDateString()}</td>
              <td className={styles.doneColumn}>
                <Checkbox handleChange={ (event) => completeTask(event, task.id) }
                          defaultChecked={ task.done } />
              </td>
              <td className={styles.actionsColumn}>            
                  <Link to={`/edit/${task.id}`}><i className="fa fa-edit"></i></Link>            
                  <a href="#" onClick={ (event) => deleteTask(event, task.id) }><i className="fa fa-trash"></i></a>            
              </td>
            </tr>
          ));


          
export default withRouter(List);