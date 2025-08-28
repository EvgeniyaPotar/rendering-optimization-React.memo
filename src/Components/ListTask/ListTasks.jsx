import { useState } from "react";
import TaskItem from "./TaskItem/TaskItem.jsx";

const ListTasks = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const addTask = () => {
    const newTask = createRandomString(20);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteLastTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task, i) => i !== prevTasks.length - 1),
    );
  };

  return (
    <div className="card">
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
      <div>
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={deleteLastTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
};
export default ListTasks;
