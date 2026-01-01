import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="app">
      <h2>React To-Do List</h2>
      <p style={{ fontSize: "14px", color: "#555" }}>
      Enter a task in the box and click <b>Add</b>.<br />
      Click ❌ to delete a task.<br />
      Click on a task to mark it as completed.
      </p>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              onClick={() => toggleDone(index)}
              style={{
                textDecoration: t.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
