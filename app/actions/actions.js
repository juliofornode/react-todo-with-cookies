export const saveTask = (newTask) => {
  return {
    type: 'SAVE_TASK',
    newTask: newTask
  };
};

const TASKS = ['paseo', 'llamadas'];

export const loadTasks = () => {
  return {
    type: 'LOAD_TASKS',
    tasks: TASKS
  };
};

export const deleteTask = (task) => {
  return {
    type: 'DELETE_TASK',
    task: task
  };
};
