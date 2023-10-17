import "../styles/ToDo.css";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";

const AddToDo = () => {
  const [task, setTask] = useState("");

  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = async () => {
    let body = {
      name: task,
      isCompleted: false,
      date: "oct 16 2023",
    };
    let response = await axios.post(
      "https://tough-goat-visor.cyclic.app/task",
      body
    );

    setTask("");
  };

  return (
    <div id="input_container">
      <div className="AddToDo">
        <input
          type="text"
          value={task}
          onChange={(event) => handleInput(event)}
        />
      </div>
      <Button func={handleSubmit} />
    </div>
  );
};

export default AddToDo;
