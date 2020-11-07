import React, { useContext, useState, useEffect } from "react";
import { ScheduleListContext } from "./context/ScheduleListContext";

const ScheduleForm = () => {
  const { addSchedule, editItem, editSchedule } = useContext(
    ScheduleListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addSchedule(title);
      setTitle("");
    } else {
      editSchedule(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
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
        className="task-input focus:bg-white border-transparent focus:border-gray-400"
        placeholder="Add Title..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-schedule-btn hover:bg-gray-400 px-2 py-2">
          {editItem ? "Save Schedule" : "Add Schedule"}
        </button>
        <button className="btn clear-btn hover:bg-gray-400 px-2 py-2">Clear</button>
      </div>

    </form>
  );
};

export default ScheduleForm;
