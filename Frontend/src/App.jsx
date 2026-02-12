import React, { useEffect, useState } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import api from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Task Tracker</h2>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  );
}

export default App;
