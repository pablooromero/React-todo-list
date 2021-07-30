import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } =
    useContext(TaskListContext);

  const [title, setTitle] = useState("");

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length <= 1) {
      return;
    }
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Añadir tarea..."
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Editar Tarea" : "Agregar"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
