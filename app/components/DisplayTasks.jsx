import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions/actions';
import {delete_cookie} from 'sfcookies';

class DisplayTasks extends Component {
  constructor(props) {
    super(props);
    this.listTasks = this.listTasks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(task) {
    this.props.deleteTask(task);
  }

  listTasks() {
    return this.props.tasks.map( (task, index) => {
      return (
        <li key={index}>
          {task}
          &nbsp;
          &nbsp;
          <button onClick={() => this.handleClick(task)}>X</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="DisplayTasks">
        <h3>List of tasks to do:</h3>
        <ul>
          {this.listTasks()}
        </ul>
        <button onClick={() => delete_cookie('tasksCookie')}>Delete cookies</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({
    deleteTask: deleteTask
  }, dispatch);
}

DisplayTasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func
};

export default connect(mapStateToProps, mapActionsToProps)(DisplayTasks);
