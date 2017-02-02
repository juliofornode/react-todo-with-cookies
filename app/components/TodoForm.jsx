import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveTask} from '../actions/actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(eventObject) {
    this.setState({ task: eventObject.target.value });
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    const newTask = this.state.task;
    this.props.saveTask(newTask);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.task} placeholder="Enter task"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({ saveTask: saveTask }, dispatch);
}

TodoForm.propTypes = {
  saveTask: PropTypes.func
};

export default connect(null, mapActionsToProps)(TodoForm);
